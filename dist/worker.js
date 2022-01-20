var local, onmessage;
local = {};
onmessage = function(e){
  var ref$, bufs, key, lib;
  ref$ = e.data || {}, bufs = ref$.bufs, key = ref$.key, lib = ref$.lib;
  if (!local.inited) {
    console.log(lib);
    importScripts(lib || "opentype.js");
    local.inited = true;
  }
  return Promise.resolve().then(function(){
    return bufs.map(function(it){
      return opentype.parse(it);
    });
  }).then(function(fonts){
    var glyphs, i$, len$, font, j$, to$, i, merged, ref$;
    glyphs = [];
    for (i$ = 0, len$ = fonts.length; i$ < len$; ++i$) {
      font = fonts[i$];
      for (j$ = 0, to$ = font.glyphs.length; j$ < to$; ++j$) {
        i = j$;
        glyphs.push(font.glyphs.glyphs[i]);
      }
    }
    font = fonts[0];
    merged = new opentype.Font((ref$ = {
      glyphs: glyphs,
      familyName: font.names.fontFamily.en,
      styleName: font.names.fontSubfamily.en
    }, ref$.unitsPerEm = font.unitsPerEm, ref$.ascender = font.ascender, ref$.descender = font.descender, ref$));
    return postMessage({
      buf: merged.toArrayBuffer(),
      key: key
    });
  });
};
