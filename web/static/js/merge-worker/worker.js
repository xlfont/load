var onmessage;
importScripts('http://localhost:50383/assets/lib/@plotdb/opentype.js/main/opentype.js');
console.log('ok');
onmessage = function(e){
  var abs, ps;
  abs = e.data;
  ps = abs.map(function(buf){
    return opentype.parse(buf);
  });
  return Promise.all(ps).then(function(fonts){
    var font, glyphs, i$, len$, j$, to$, i, nf, ref$, ab;
    font = fonts[0];
    console.log('fonts loaded, merging...');
    glyphs = [];
    for (i$ = 0, len$ = fonts.length; i$ < len$; ++i$) {
      font = fonts[i$];
      for (j$ = 0, to$ = font.glyphs.length; j$ < to$; ++j$) {
        i = j$;
        glyphs.push(font.glyphs.glyphs[i]);
      }
    }
    font = fonts[0];
    nf = new opentype.Font((ref$ = {
      glyphs: glyphs,
      familyName: font.names.fontFamily.en,
      styleName: font.names.fontSubfamily.en
    }, ref$.unitsPerEm = font.unitsPerEm, ref$.ascender = font.ascender, ref$.descender = font.descender, ref$));
    ab = nf.toArrayBuffer();
    return postMessage(ab);
  });
};