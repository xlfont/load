err = (e = {}) -> new Error! <<< ({name: \lderror} <<< e)

xlf-worker =
  key: 0
  worker: null
  queue: []
  init: (opt = {}) ->
    <~ Promise.resolve!then _
    if @worker => return
    url = URL.createObjectURL(new Blob([xlf-worker-code], {type: 'text/javascript'}))
    @worker = new Worker url
    URL.revokeObjectURL url
    @worker.onmessage = (e) ~>
      {buf,key} = e.data
      if !(item = @queue.filter((q) -> key == q.key).0) => return
      @queue.splice @queue.indexOf(item), 1
      item.res buf

  run: (abs, opt) ->
    (res, rej) <~ new Promise _
    @init opt
      .then ~>
        @queue.push item = {res, rej, key: (@key++)}
        @worker.postMessage {bufs: abs, key: item.key, lib: opt.opentype-url}

xlf-merger = ({bufs, use-worker}) ->
  if !bufs.length => return Promise.resolve!
  # dont enable worker for now
  if use-worker => return xlf-worker.run bufs, use-worker
  Promise.resolve!
    .then -> bufs.map -> opentype.parse it
    .then (fonts) ->
      glyphs = []
      for font in fonts =>
        for i from 0 til font.glyphs.length =>
          glyphs.push font.glyphs.glyphs[i]
      font = fonts.0
      merged = new opentype.Font({glyphs: glyphs} <<< {
        familyName: font.names.fontFamily.en, styleName: font.names.fontSubfamily.en
      } <<< font{unitsPerEm, ascender, descender})
      return merged.toArrayBuffer!

xlfont = (opt = {}) ->
  @opt = opt
  @sub = {set: {}, font: {}}
  @cjk-only = opt.cjk-only or false
  @codemap = {}
  @otf =
    font: null   # opentype.js font object
    dirty: true  # true if we need to re-generate
  @path = opt.path
  @name = opt.name or (@path
    .replace(/\.[a-zA-Z0-9]+$/,'')
    .replace(/^https?:\/\/[^/]+\//g,'')
    .replace(/\s/g, '-')
    .replace(/\//g,'-')
  ).toLowerCase!
  @style = opt.style or \normal
  @weight = opt.weight or \400
  @ext = (opt.ext or (/\.(ttf|otf|woff2|woff)$/.exec(@path) or []).1 or '')
  @format = @_format @ext
  @className = "xfl-#{(@name or '').replace(/\s+/g,'_')}-#{Math.random!toString(36)substring(2)}"
  @is-xl = if opt.is-xl? => opt.is-xl else !@ext
  if !@ext => @ext = \woff
  @do-merge = if opt.do-merge? => opt.do-merge else false
  @use-worker = if opt.use-worker? => opt.use-worker else false
  @misschar = {}
  @css = []
  @init = proxise.once ~> @_init!
  @init!
  @

xlfont.prototype = Object.create(Object.prototype) <<< do
  _format: (f = '') ->
    f = f.toLowerCase!
    f = if f == 'ttf' => 'truetype'
    else if f == 'otf' => 'truetype'
    else f
    "format('#{f}')"
  _init: ->
    Promise.resolve!then ~>
      # not xlfont but regular font. load directly.
      if !@is-xl =>
        @css = [{content: """
        @font-face {
          font-family: "#{@name}";
          src: url("#{@path}") #{@format};
          font-style: #{@style};
          font-weight: #{@weight};
        }
        .#{@className} { font-family: "#{@name}"; }"""}]
        xfl.update!
      else return new Promise (res, rej) ~>
        xhr = new XMLHttpRequest!
        xhr.addEventListener \readystatechange, ~>
          if xhr.readyState != XMLHttpRequest.DONE => return
          if xhr.status != 200 => return rej err {code: xhr.status, message: xhr.responseText}
          (xhr.responseText or '')
            .split(\\n)
            .map (d,i) ~> d.split(' ').map (e,j) ~> @codemap[e] = (i + 1)
          res!
        xhr.open \GET, "#{@path}/charmap.txt"
        xhr.send!

  _fetch: (f = {}, dofetch = false, type = \ttf) ->
    if !dofetch =>
      if !f.url =>
        if @is-xl => f <<< url: "#{@path}/#{f.key}.#type", type: type
        else f <<< url: @path, type: @ext.toLowerCase! or type
      return Promise.resolve f
    if f.blob => return Promise.resolve f
    if !f.proxy => f.proxy = proxise (f) ~>
      if f.running => return
      f.running = true
      p = new Promise (res, rej) ~>
        if f.blob => return res f
        xhr = new XMLHttpRequest!
        xhr.addEventListener \readystatechange, ~>
          if xhr.readyState != XMLHttpRequest.DONE => return
          if xhr.status != 200 => return rej err {code: xhr.status, message: xhr.responseText}
          @otf.dirty = true
          f <<< url: URL.createObjectURL(xhr.response), blob: xhr.response, type: (@ext.toLowerCase! or type)
          return res f
        if @is-xl => xhr.open \GET, "#{@path}/#{f.key}.#type"
        else xhr.open \GET, @path
        xhr.responseType = \blob
        xhr.send!
      p
        .finally -> f.running = false
        .then -> f.proxy.resolve f
        .then -> f
    f.proxy f

  fetch-all: ->
    if @is-xl => Promise.all([f for k,f of @sub.font].map ~> @_fetch it, true, \woff)
    else @_fetch @sub.font[0], true, \ttf

  fetch: (list = [], dofetch = false) ->
    if !@is-xl =>
      if @sub.font.0 and @sub.font.0.blob => return Promise.resolve!
      list = [0]
    # true: fetch secondary fonts and merge with opentype.js
    do-merge = @do-merge
    # to support dynamic font aggregation, patch this following line
    ps = Array.from new Set(list.map -> it)
      .filter ~> !@sub.font[it]
      .map (d, i) ~>
        @sub.font[d] = f = {key: d}
        # for xlfont, always use woff. otherwise use ttf
        type = if !@is-xl => \ttf else \woff
        f.need-merge = (+d != 1)
        # always fetch files if do-merge is true, since it may be large and many files
        # that we want to prevent from uncertainty of network lagging
        @_fetch f, (if !do-merge => dofetch else true), type
    Promise.all ps
      .then (subfonts) ~>
        if !do-merge => return subfonts
        ps = subfonts
          .filter -> it.need-merge
          .map (font) ->
            # FileReader has better compatibility than blob.arrayBuffer
            # it.blob.arrayBuffer!
            (res, rej) <- new Promise _
            fr = new FileReader!
            fr <<< onerror: (-> rej it), onload: (-> res fr.result)
            fr.readAsArrayBuffer font.blob
        Promise.all ps
          .then ~> xlf-merger {bufs: it, use-worker: @use-worker}
          .then (ab) ->
            if !ab => return subfonts.filter(->!it.need-merge)
            font = subfonts.filter(->it.need-merge).0
            blob = new Blob [ab], {type: "font/#{font.type or 'ttf'}"}
            font =
              url: URL.createObjectURL(blob)
              blob: blob
              type: font.type or 'ttf'
            return subfonts.filter(->!it.need-merge) ++ [font]

      .then (subfonts) ~>
        if !subfonts.length => return
        css = ""
        for f in subfonts =>
          format = @_format(f.type)
          css += """@font-face {
            font-family: "#{@name}";
            src: url("#{f.url}") #format;
            font-style: #{@style};
            font-weight: #{@weight};
          }"""
        css += """.#{@className} { font-family: "#{@name}"; }"""
        @css.push {content: css}

  has-char: (c) -> return if typeof(@misschar[c]) == \undefined => undefined else !@misshcar[c]
  get-path: (opt = {}) ->
    {text, x, y, font-size} = {text: '', x: 0, y: 0, font-size: 48} <<< opt
    @sync text
      .then ~> @getotf!
      .then (otf) ~>
        txt = ''
        for i from 0 til text.length => txt += (if !@misschar[text[i]] => text[i] else ' ')
        path = otf.getPath txt, x, y, font-size
        return path

  getotf: ->
    if !(opentype?) =>
      return Promise.reject err({id: 1022, message: "[@plotdb/xfl] need opentype.js to merge subfonts"})
    if !@otf.dirty => return Promise.resolve(@otf.font)
    Promise.resolve!
      .then ~> if !@is-xl => return @fetch! else @fetch-all!
      .then ~>
        ps = [f for k,f of @sub.font] .map (f) ->
          if f.otf => return Promise.resolve(f)
          if Array.isArray(f._ps) => return new Promise (res, rej) -> f._ps.push {res, rej}
          f._ps = []
          return opentype.load f.url .then ->
            f.otf = it
            f._ps.map -> it.res f
            f
        Promise.all ps
      .then (list = []) ~>
        if list.length == 1 => return list.0.otf
        glyphs = list
          .map (f) ->
            glyphs = f.otf.glyphs
            [glyphs.glyphs[i] for i from 1 to glyphs.length]
          .reduce(((a,b) -> a ++ b), [])
          .filter -> it
        @otf.font = new opentype.Font({
          familyName: @name
          styleName: @style or 'normal'
          glyphs: glyphs
        } <<< list.0.otf{unitsPerEm, ascender, descender})
        # workaround: opentype.js seems to not init kerningPairs well for manually constructed font.
        # but we can still do it ourselves.
        @otf.font.kerningPairs = {}
        return @otf.font

  sync: (txt = "") ->
    if !@is-xl =>
      xfl.update!
      return Promise.resolve!
    Promise.resolve!
      .then ~>
        [misscodes, missset]= [{}, {}]
        for i from 0 til txt.length =>
          code = txt.charCodeAt(i)
          if @cjk-only and !xfl.isCJK(code) => continue
          set-idx = @codemap[code.toString 16]
          @misschar[txt[i]] = misscodes[txt[i]] = if !set-idx => true else false
          # TODO we should set @sub.set[set-idx] to true only if it's successfully fetched.
          if set-idx and !@sub.set[set-idx] => @sub.set[set-idx] = missset[set-idx] = true
        misscodes = [k for k of misscodes].filter(->misscodes[it])
        if misscodes.length =>
          console.log "[@plotdb/xfl] sync xl-font with following chars unsupported: #{misscodes.join('')}"
        list = [k for k of missset]
        if list.length => @fetch list
      .then -> xfl.update!

xfl = do
  xlfont: xlfont
  range:
    CJK: [
      [0x3040 0x30ff], [0x3400 0x4dbf], [0x4e00 0x9fff],
      [0xf900 0xfaff], [0xff66 0xff9f], [0x3131 0xD79D]
    ]
  fonts: {}
  running: {}
  isCJK: (code) -> @range.CJK.filter(-> code >= it.0 and code <= it.1).length
  proxy: {}

  update: ->
    css = ""
    for k,v of @fonts =>
      (v.css or [])
        .filter -> !it.rendered
        .map ->
          it.rendered = true
          css := css + it.content
    if css =>
      node = document.createElement("style")
      node.textContent = css
      node.setAttribute \type, 'text/css'
      document.body.appendChild node
    Promise.all([f for k,f of @fonts].map -> document.fonts.load "16px #{v.name}")
      .then ->
        # we used to have a 350ms timeout for unknown reason, such as:
        #   new Promise (res, rej) -> setTimeout (->res!), 350
        # this leads to delay and thus reduced user experience, so we remove it for now.
        # TODO when we find out why, we should document it and consider adding it back.

  # load font from path. will resolve information from path,
  # if failed to resolve, user can still supply options for alternative information.
  _load: (opt = {}) ->
    {path} = opt
    if @running[path] => return
    @running[path] = true
    Promise.resolve!
      .then ~>
        @fonts[path] = fobj = new xlfont opt
        fobj.init!
      .finally ~> @running[path] = false
      .then ~>
        @proxy[path].resolve @fonts[path]
        @fonts[path]
      .catch ~>
        @proxy[path].reject it
        Promise.reject it

  load: (opt = {}) ->
    if typeof(opt) == \string => opt = {path: opt}
    (res, rej) <~ new Promise _
    if !(path = opt.path) => return rej err({id: 400})
    path = path.replace(/\/$/,'')
    if @fonts[path] => return res(that)
    if !@proxy[path] => @proxy[path] = proxise ~> @_load it
    @proxy[path]({} <<< opt <<< {path})
      .then -> res it
      .catch -> rej it

if module? => module.exports = xfl
else if window? => window.xfl = xfl
