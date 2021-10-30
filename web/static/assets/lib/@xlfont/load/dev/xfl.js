var err, xlfWorker, xlfMerger, xlfont, xfl;
err = function(e){
  e == null && (e = {});
  return import$(new Error(), import$({
    name: 'lderror'
  }, e));
};
xlfWorker = {
  key: 0,
  worker: null,
  queue: [],
  init: function(){
    var this$ = this;
    if (this.worker) {
      return;
    }
    this.worker = new Worker("/assets/lib/@xlfont/load/dev/worker.min.js");
    return this.worker.onmessage = function(e){
      var ref$, buf, key, item;
      ref$ = e.data, buf = ref$.buf, key = ref$.key;
      if (!(item = this$.queue.filter(function(q){
        return key === q.key;
      })[0])) {
        return;
      }
      this$.queue.splice(this$.queue.indexOf(item), 1);
      return item.res(buf);
    };
  },
  run: function(abs){
    var this$ = this;
    return new Promise(function(res, rej){
      var item;
      this$.init();
      this$.queue.push(item = {
        res: res,
        rej: rej,
        key: this$.key++
      });
      return this$.worker.postMessage({
        bufs: abs,
        key: item.key
      });
    });
  }
};
xlfMerger = function(arg$){
  var bufs, useWorker;
  bufs = arg$.bufs, useWorker = arg$.useWorker;
  if (!bufs.length) {
    return Promise.resolve();
  }
  if (useWorker) {
    return console.error("[@xlfont/load] worker is not yet supported.");
  }
  if (useWorker) {
    return xlfWorker.run(bufs);
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
    return merged.toArrayBuffer();
  });
};
xlfont = function(opt){
  var that, this$ = this;
  opt == null && (opt = {});
  this.opt = opt;
  this.sub = {
    set: {},
    font: {}
  };
  this.cjkOnly = opt.cjkOnly || false;
  this.codemap = {};
  this.otf = {
    font: null,
    dirty: true
  };
  this.path = opt.path;
  this.name = opt.name || this.path.replace(/\.[a-zA-Z0-9]+$/, '').replace(/^https?:\/\/[^/]+\//g, '').replace(/\s/g, '-').replace(/\//g, '-').toLowerCase();
  this.style = opt.style || 'normal';
  this.weight = opt.weight || '400';
  this.ext = opt.ext || (/\.(ttf|otf|woff2|woff)$/.exec(this.path) || [])[1] || '';
  this.format = (that = this.ext.toLowerCase()) ? that === 'ttf'
    ? 'truetype'
    : that === 'otf' ? 'truetype' : that : '';
  if (this.format) {
    this.format = "format('" + this.format + "')";
  }
  this.className = "xfl-" + (this.name || '').replace(/\s+/g, '_') + "-" + Math.random().toString(36).substring(2);
  this.isXl = !this.ext;
  if (!this.ext) {
    this.ext = 'woff';
  }
  this.doMerge = opt.doMerge != null ? opt.doMerge : false;
  this.useWorker = opt.useWorker != null ? opt.useWorker : false;
  this.css = [];
  this.init = proxise.once(function(){
    return this$._init();
  });
  this.init();
  return this;
};
xlfont.prototype = import$(Object.create(Object.prototype), {
  _init: function(){
    var this$ = this;
    return Promise.resolve().then(function(){
      if (!this$.isXl) {
        this$.css = [{
          content: "@font-face {\n  font-family: \"" + this$.name + "\";\n  src: url(\"" + this$.path + "\") " + this$.format + ";\n  font-style: " + this$.style + ";\n  font-weight: " + this$.weight + ";\n}\n." + this$.className + " { font-family: \"" + this$.name + "\"; }"
        }];
        return xfl.update();
      } else {
        return new Promise(function(res, rej){
          var xhr;
          xhr = new XMLHttpRequest();
          xhr.addEventListener('readystatechange', function(){
            if (xhr.readyState !== XMLHttpRequest.DONE) {
              return;
            }
            if (xhr.status !== 200) {
              return rej(err({
                code: xhr.status,
                message: xhr.responseText
              }));
            }
            (xhr.responseText || '').split('\n').map(function(d, i){
              return d.split(' ').map(function(e, j){
                return this$.codemap[e] = i + 1;
              });
            });
            return res();
          });
          xhr.open('GET', this$.path + "/charmap.txt");
          return xhr.send();
        });
      }
    });
  },
  _fetch: function(f, dofetch, type){
    var this$ = this;
    f == null && (f = {});
    dofetch == null && (dofetch = false);
    type == null && (type = 'ttf');
    if (!dofetch) {
      if (!f.url) {
        if (this.isXl) {
          f.url = this.path + "/" + f.key + "." + type;
          f.type = type;
        } else {
          f.url = this.path;
          f.type = this.ext.toLowerCase() || type;
        }
      }
      return Promise.resolve(f);
    }
    if (f.blob) {
      return Promise.resolve(f);
    }
    if (!f.proxy) {
      f.proxy = proxise(function(f){
        var p;
        if (f.running) {
          return;
        }
        f.running = true;
        p = new Promise(function(res, rej){
          var xhr;
          if (f.blob) {
            return res(f);
          }
          xhr = new XMLHttpRequest();
          xhr.addEventListener('readystatechange', function(){
            if (xhr.readyState !== XMLHttpRequest.DONE) {
              return;
            }
            if (xhr.status !== 200) {
              return rej(err({
                code: xhr.status,
                message: xhr.responseText
              }));
            }
            this$.otf.dirty = true;
            f.url = URL.createObjectURL(xhr.response);
            f.blob = xhr.response;
            f.type = this$.ext.toLowerCase() || type;
            return res(f);
          });
          if (this$.isXl) {
            xhr.open('GET', this$.path + "/" + f.key + "." + type);
          } else {
            xhr.open('GET', this$.path);
          }
          xhr.responseType = 'blob';
          return xhr.send();
        });
        return p['finally'](function(){
          return f.running = false;
        });
      });
    }
    return f.proxy(f);
  },
  fetchAll: function(){
    var k, f, this$ = this;
    if (this.isXl) {
      return Promise.all((function(){
        var ref$, results$ = [];
        for (k in ref$ = this.sub.font) {
          f = ref$[k];
          results$.push(f);
        }
        return results$;
      }.call(this)).map(function(it){
        return this$._fetch(it, true, 'woff');
      }));
    } else {
      return this._fetch(this.sub.font[0], true, 'ttf');
    }
  },
  fetch: function(list, dofetch){
    var doMerge, ps, this$ = this;
    list == null && (list = []);
    dofetch == null && (dofetch = false);
    if (!this.isXl) {
      if (this.sub.font[0] && this.sub.font[0].blob) {
        return Promise.resolve();
      }
      list = [0];
    }
    doMerge = this.doMerge;
    ps = Array.from(new Set(list.map(function(it){
      return it;
    }))).filter(function(it){
      return !this$.sub.font[it];
    }).map(function(d, i){
      var f, type;
      this$.sub.font[d] = f = {
        key: d
      };
      type = !this$.isXl ? 'ttf' : 'woff';
      f.needMerge = +d !== 1;
      return this$._fetch(f, !doMerge ? dofetch : true, type);
    });
    return Promise.all(ps).then(function(subfonts){
      var ps;
      if (!doMerge) {
        return subfonts;
      }
      ps = subfonts.filter(function(it){
        return it.needMerge;
      }).map(function(font){
        return new Promise(function(res, rej){
          var fr;
          fr = new FileReader();
          fr.onerror = function(it){
            return rej(it);
          };
          fr.onload = function(){
            return res(fr.result);
          };
          return fr.readAsArrayBuffer(font.blob);
        });
      });
      return Promise.all(ps).then(function(it){
        return xlfMerger({
          bufs: it,
          useWorker: this$.useWorker
        });
      }).then(function(ab){
        var font, blob;
        if (!ab) {
          return subfonts.filter(function(it){
            return !it.needMerge;
          });
        }
        font = subfonts.filter(function(it){
          return it.needMerge;
        })[0];
        blob = new Blob([ab], {
          type: "font/" + (font.type || 'ttf')
        });
        font = {
          url: URL.createObjectURL(blob),
          blob: blob,
          type: font.type || 'ttf'
        };
        return subfonts.filter(function(it){
          return !it.needMerge;
        }).concat([font]);
      });
    }).then(function(subfonts){
      var css, k, ref$, f, i$, len$;
      if (!subfonts.length) {
        return;
      }
      css = "." + this$.className + " { font-family: \"" + this$.name + "\"; }";
      for (k in ref$ = this$.sub.font) {
        f = ref$[k];
      }
      for (i$ = 0, len$ = subfonts.length; i$ < len$; ++i$) {
        f = subfonts[i$];
        css += "@font-face {\n  font-family: \"" + this$.name + "\";\n  src: url(\"" + f.url + "\") format('" + f.type + "');\n  font-style: " + this$.style + ";\n  font-weight: " + this$.weight + ";\n}";
      }
      return this$.css.push({
        content: css
      });
    });
  },
  getotf: function(){
    var this$ = this;
    if (!(typeof opentype != 'undefined' && opentype !== null)) {
      return Promise.reject(err({
        id: 1022,
        message: "[@plotdb/xfl] need opentype.js to merge subfonts"
      }));
    }
    if (!this.otf.dirty) {
      return Promise.resolve(this.otf.font);
    }
    return Promise.resolve().then(function(){
      if (!this$.isXl) {
        return this$.fetch();
      } else {
        return this$.fetchAll();
      }
    }).then(function(){
      var ps, k, f;
      ps = (function(){
        var ref$, results$ = [];
        for (k in ref$ = this.sub.font) {
          f = ref$[k];
          results$.push(f);
        }
        return results$;
      }.call(this$)).map(function(f){
        if (f.otf) {
          return Promise.resolve(f);
        } else {
          return opentype.load(f.url).then(function(it){
            f.otf = it;
            return f;
          });
        }
      });
      return Promise.all(ps);
    }).then(function(list){
      var glyphs, ref$, ref1$;
      list == null && (list = []);
      if (list.length === 1) {
        return list[0].otf;
      }
      glyphs = list.map(function(f){
        var glyphs, i$, to$, i, results$ = [];
        glyphs = f.otf.glyphs;
        for (i$ = 1, to$ = glyphs.length; i$ <= to$; ++i$) {
          i = i$;
          results$.push(glyphs.glyphs[i]);
        }
        return results$;
      }).reduce(function(a, b){
        return a.concat(b);
      }, []).filter(function(it){
        return it;
      });
      this$.otf.font = new opentype.Font((ref1$ = {
        familyName: this$.name,
        styleName: this$.style || 'normal',
        glyphs: glyphs
      }, ref1$.unitsPerEm = (ref$ = list[0].otf).unitsPerEm, ref1$.ascender = ref$.ascender, ref1$.descender = ref$.descender, ref1$));
      this$.otf.font.kerningPairs = {};
      return this$.otf.font;
    });
  },
  sync: function(txt){
    var ref$, misschar, missset, this$ = this;
    txt == null && (txt = "");
    if (!this.isXl) {
      xfl.update();
      return Promise.resolve();
    }
    ref$ = [{}, {}], misschar = ref$[0], missset = ref$[1];
    return Promise.resolve().then(function(){
      var i$, to$, i, code, setIdx, k, list, res$;
      for (i$ = 0, to$ = txt.length; i$ < to$; ++i$) {
        i = i$;
        code = txt.charCodeAt(i);
        if (this$.cjkOnly && !xfl.isCJK(code)) {
          continue;
        }
        setIdx = this$.codemap[code.toString(16)];
        if (!setIdx) {
          misschar[txt[i]] = true;
        } else if (!this$.sub.set[setIdx]) {
          this$.sub.set[setIdx] = missset[setIdx] = true;
        }
      }
      misschar = (function(){
        var results$ = [];
        for (k in misschar) {
          results$.push(k);
        }
        return results$;
      }()).filter(function(it){
        return it.trim();
      });
      if (misschar.length) {
        console.log("[@plotdb/xfl] sync xl-font with following chars unsupported: " + misschar.join(''));
      }
      res$ = [];
      for (k in missset) {
        res$.push(k);
      }
      list = res$;
      if (list.length) {
        return this$.fetch(list);
      }
    }).then(function(){
      return xfl.update();
    });
  }
});
xfl = {
  range: {
    CJK: [[0x3040, 0x30ff], [0x3400, 0x4dbf], [0x4e00, 0x9fff], [0xf900, 0xfaff], [0xff66, 0xff9f], [0x3131, 0xD79D]]
  },
  fonts: {},
  running: {},
  isCJK: function(code){
    return this.range.CJK.filter(function(it){
      return code >= it[0] && code <= it[1];
    }).length;
  },
  proxy: {},
  update: function(){
    var css, k, ref$, v, node, f;
    css = "";
    for (k in ref$ = this.fonts) {
      v = ref$[k];
      (v.css || []).filter(fn$).map(fn1$);
    }
    if (css) {
      node = document.createElement("style");
      node.textContent = css;
      node.setAttribute('type', 'text/css');
      document.body.appendChild(node);
    }
    return Promise.all((function(){
      var ref$, results$ = [];
      for (k in ref$ = this.fonts) {
        f = ref$[k];
        results$.push(f);
      }
      return results$;
    }.call(this)).map(function(){
      return document.fonts.load("16px " + v.name);
    })).then(function(){
      return new Promise(function(res, rej){
        return setTimeout(function(){
          return res();
        }, 350);
      });
    });
    function fn$(it){
      return !it.rendered;
    }
    function fn1$(it){
      it.rendered = true;
      return css = css + it.content;
    }
  },
  _load: function(opt){
    var path, this$ = this;
    opt == null && (opt = {});
    path = opt.path;
    if (this.running[path]) {
      return;
    }
    this.running[path] = true;
    return Promise.resolve().then(function(){
      var fobj;
      this$.fonts[path] = fobj = new xlfont(opt);
      return fobj.init();
    })['finally'](function(){
      return this$.running[path] = false;
    }).then(function(){
      this$.proxy[path].resolve(this$.fonts[path]);
      return this$.fonts[path];
    })['catch'](function(it){
      this$.proxy[path].reject(it);
      return Promise.reject(it);
    });
  },
  load: function(opt){
    var this$ = this;
    opt == null && (opt = {});
    if (typeof opt === 'string') {
      opt = {
        path: opt
      };
    }
    return new Promise(function(res, rej){
      var path, that, ref$;
      if (!(path = opt.path)) {
        return rej(err({
          id: 400
        }));
      }
      path = path.replace(/\/$/, '');
      if (that = this$.fonts[path]) {
        return res(that);
      }
      if (!this$.proxy[path]) {
        this$.proxy[path] = proxise(function(it){
          return this$._load(it);
        });
      }
      return this$.proxy[path]((ref$ = import$({}, opt), ref$.path = path, ref$)).then(function(it){
        return res(it);
      })['catch'](function(it){
        return rej(it);
      });
    });
  }
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = xfl;
} else if (typeof window != 'undefined' && window !== null) {
  window.xfl = xfl;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
