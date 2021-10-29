/*
attempt to merge subfonts back to enhance font loading experience.

too many font files with css leads to progressively loading and FOUT.
however, merge files with JS take quite long if we also merge the major font file ( 1.ttf )
a hybrid method may work ( 1.ttf + merge.ttf with css ), as demonstrated below.

*/
times = {}
worker-from-remote = ->
  base = "/assets/fonts/cjk手寫4"
  base = "https://xlfont.maketext.io/links/JasonHandwriting4/normal/400" 
  ld$.fetch '/js/merge-worker/worker.js', {method: \GET}, {type: \text}
    .then -> 
      console.log it
      url = URL.createObjectURL(new Blob [it], {type: "text/javascript"})

      #worker = new Worker('/js/test/worker.js')
      worker = new Worker(url)
      worker.onmessage = (e) ->
        console.log "response:", e, e.data
        times.t3 = Date.now!
        console.log 'arraybuffer generated, preparing style'
        blob = new Blob [e.data], {type: "font/otf"}
        url = URL.createObjectURL blob
        style = document.createElement("style")
        style.setAttribute \type, "text/css"
        style.textContent = """
        @font-face {
          font-family: test-font;
          src: url("#url") format('woff');
        }
        @font-face {
          font-family: test-font;
          src: url("#base/1.woff2") format('woff2');
        }
        body { font-family: test-font }
        """
        document.head.appendChild style
        times.t4 = Date.now!
        console.log 'style added' 
        console.log "#{((times.t2 - times.t1)/1000).toFixed(2)}s"
        console.log "#{((times.t3 - times.t2)/1000).toFixed(2)}s"
        console.log "#{((times.t4 - times.t3)/1000).toFixed(2)}s"
        console.log "#{((times.t4 - times.t1)/1000).toFixed(2)}s"
        document.body.classList.remove \running

      times.t1 = Date.now!
      list = [2 to 20].map -> "#base/#it.woff"

      ps = list.map (url) -> ld$.fetch url, {method: \GET} .then -> it.arrayBuffer!
      Promise.all ps
        .then (abs) ->
          worker.postMessage abs
          times.t2 = Date.now!

worker-from-remote!

/*
console.log 'load fonts...'
ps = list.map (url) -> opentype.load url .then -> it
Promise.all ps
  .then (fonts) ->
    console.log fonts
    t2 = Date.now!
    font = fonts.0
    console.log 'fonts loaded, merging...'
    glyphs = []
    for font in fonts =>
      for i from 0 til font.glyphs.length =>
        glyphs.push font.glyphs.glyphs[i]

    font = fonts.0
    nf = new opentype.Font({glyphs: glyphs} <<< {
      familyName: font.names.fontFamily.en, styleName: font.names.fontSubfamily.en
    } <<< font{unitsPerEm, ascender, descender})
    ab = font.toArrayBuffer!
    console.log ab
    t3 = Date.now!
    console.log 'arraybuffer generated, preparing style'
    blob = new Blob [ab], {type: "font/otf"}
    url = URL.createObjectURL blob
    style = document.createElement("style")
    style.setAttribute \type, "text/css"
    style.textContent = """
    @font-face {
      font-family: test-font;
      src: url("#url") format('opentype');
    }
    body { font-family: test-font }
    """
    document.head.appendChild style
    t4 = Date.now!
    console.log 'style added' 
    console.log "#{((t2 - t1)/1000).toFixed(2)}s"
    console.log "#{((t3 - t2)/1000).toFixed(2)}s"
    console.log "#{((t4 - t3)/1000).toFixed(2)}s"
    console.log "#{((t4 - t1)/1000).toFixed(2)}s"
    document.body.classList.remove \running


*/
