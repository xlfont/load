#importScripts '/assets/lib/@plotdb/opentype.js/main/opentype.js'
importScripts 'http://localhost:50383/assets/lib/@plotdb/opentype.js/main/opentype.js'
console.log \ok

onmessage = (e) ->
  abs = e.data
  ps = abs.map (buf) -> opentype.parse buf
  Promise.all ps
    .then (fonts) ->

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
      ab = nf.toArrayBuffer!
      postMessage ab
