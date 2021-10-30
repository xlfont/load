importScripts("/assets/lib/@plotdb/opentype.js/main/opentype.js")

onmessage = (e) ->
  {bufs, key} = e.data or {}
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
      postMessage {buf: merged.toArrayBuffer!, key}