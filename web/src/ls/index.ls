base = \https://plotdb.github.io/xl-fontset/alpha
base = \/assets/fonts
base = \https://xlfont.maketext.io/links
#base = \alpha/ # for local testing

editor = do
  init: ->
    @ldcv = new ldcover root: document.querySelector('.ldcv')
    @ldld = new ldloader root: document.querySelector('.ldcv .inner .ld')
    @gldcv = new ldcover root: ld$.find('#gloader', 0), lock: true
    @gld = new ldloader root: ld$.find('#gloader',0), toggler: (v) ~> @gldcv.toggle v
    @svg = document.querySelector('svg')
    @path = document.querySelector('path')
    @textarea = document.querySelector \textarea
    @textarea.addEventListener \keyup, ~> @sync!
    siteroot = "#{document.location.protocol}//#{document.location.host}"
    @worker-cfg = {use-worker: {
      url: '/assets/lib/@xlfont/load/dev/worker.min.js'
      opentype-url: "#siteroot/assets/lib/@plotdb/opentype.js/main/dist/opentype.min.js"
      # or alternatively,
      # opentype-url: 'https://cdn.jsdelivr.net/npm/@plotdb/opentype.js@1.3.5/dist/opentype.min.js'
    }}
    document.querySelector \#chooser .addEventListener \click, (e) ~>
      if !e or !e.target => return
      target = e.target.getAttribute(\data-target)
      if target == \svg => return @to-svg!
      p = ld$.parent(e.target, '[data-font]', document.querySelector(\#chooser))
      if !p => return
      [font,type,weight] = <[data-font data-type data-weight]>.map -> p.getAttribute it
      if !font => return
      @gld.on!
      debounce 350
        .then ~>
          if type != \en => return @load font, weight
          xfl.load({path: "#base/#font/normal/#weight.ttf", weight, style: \normal} <<< @worker-cfg)
            .then ~>
              @font = it
              @sync!
        .then ~>
          console.log \loaded
          @gld.off!
    @gld.on!
    debounce 350
      .then ~>
        promise-body = @load 'Klee One'
        promise-head = xfl.load {path: "#base/SoukouMincho/normal/400"}
          .then (font) ->
            headlines = Array.from(document.querySelectorAll 'h1,h2,h3')
            texts = headlines.map(-> it.innerText).join('')
            font.sync texts
              .then -> headlines.map -> it.classList.add font.className
        Promise.all [promise-head, promise-body]
      .then ~>
        console.log \inited.
        @gld.off!

  to-svg: ->
    @ldld.on!
      .then ~> @ldcv.toggle!
      .then ~>
        @font.get-path text: @textarea.value.replace(\s/g, ' '), x: 0, y: 0, font-size: 48
        /*
        .then ~> @font.getotf!
        .then (otf) ~>
          path = otf.getPath(@textarea.value.replace(/\s/g,' '), 0, 0, 48)
        */
      .then (path) ~>
        box = path.getBoundingBox!
        d = path.toPathData!
        rbox = @svg.getBoundingClientRect!
        x = (rbox.width / 2) - ((box.x2 - box.x1) / 2) - box.x1
        y = (rbox.height / 2) - ((box.y2 - box.y1) / 2) - box.y1
        @path.setAttribute \d, d
        @path.setAttribute \transform, "translate(#x, #y)"
      .then ~> @ldld.off!


  load: (font, weight = 400, style = \normal) ->
    xfl.load({path: "#base/#font/#style/#weight", weight, style, do-merge: true} <<< @worker-cfg)
      .then (font) ~>
        @font = font
        @font.sync document.body.innerText
      .then ~> @sync!
  sync: ->
    if !@font => return
    @font.sync @textarea.value
    @textarea.setAttribute \class, "form-control #{@font.className}"
    document.body.setAttribute \class, "#{@font.className}"

editor.init!

