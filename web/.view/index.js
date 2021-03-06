 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, featurefonts, fontlist, libLoader, scriptLoader, url, version) {
      ;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!(libLoader || scriptLoader)) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";










}
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
for (var i = 0; i < count; i++)
{
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
}
};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var loremtext = {
  zh: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";







;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";













;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
var fontlist = [
  ["Fontworks"],
  ["DotGothic16", "DotGothic16", 400, "8231"],
  ["Klee One / SemiBold", "Klee One", 600, "10178"],
  ["Klee One", "Klee One", 400, "10178"],
  ["Stick", "Stick", 400, "8231"],
  ["Reggae One", "Reggae One", 400, "8231"],
  ["Rampart One", "Rampart One", 400, "8231"],
  ["RocknRoll One", "RocknRoll One", 400, "8230"],
  ["Train One", "Train One", 400, "4356"],

  ["Google x Adobe"],
  ["???????????? / ??????", "Noto Serif CJK TC", 200, 65535],
  ["???????????? / ???", "Noto Serif CJK TC", 300, 65535],
  ["????????????", "Noto Serif CJK TC", 400, 65535],
  ["???????????? / ??????", "Noto Serif CJK TC", 500, 65535],
  ["???????????? / ??????", "Noto Serif CJK TC", 600, 65535],
  ["???????????? / ???", "Noto Serif CJK TC", 700, 65535],
  ["???????????? / ???", "Noto Serif CJK TC", 900, 43029],

  ["???????????? / ??????", "Noto Sans CJK TC", 100, 65535],
  ["???????????? / ???", "Noto Sans CJK TC", 200, 65535],
  ["???????????? / ??????", "Noto Sans CJK TC", 300, 65535],
  ["????????????", "Noto Sans CJK TC", 400, 65535],
  ["???????????? / ??????", "Noto Sans CJK TC", 500, 65535],
  ["???????????? / ???", "Noto Sans CJK TC", 700, 65535],
  ["???????????? / ???", "Noto Sans CJK TC", 900, 65535],

  ["????????????", "Noto Sans Mono CJK TC", 400, 65535],
  ["???????????? / ???", "Noto Sans Mono CJK TC", 700, 65535],

  ["cjkFonts x ???????????????"],
  ["cjk??????4", "JasonHandwriting4", 400, "12201"],

  ["justfont"],
  ["?????????", "jf-openhuninn-1-1", 400, "9676"],

  ["flopdesign"],
  ["????????????", "SoukouMincho", 400, "9803"],

  ["????????????JT Foundry"],
  ["???????????? / ???", "Taipei Sans TC", 700, "32732"],
  ["????????????", "Taipei Sans TC", 400, "32731"],
  ["???????????? / ???", "Taipei Sans TC", 300, "32762"],

  ["GlyphWiki"],
  ["????????????A", "HanaminA", 400, "41494"],
  ["????????????B", "HanaminB", 400, "60418"],

  ["???????????? x Max"],
  ["???????????? / ???", "NaikaiFont", 700, 46817],
  ["???????????? / ??????", "NaikaiFont", 600, 46817],
  ["????????????", "NaikaiFont", 400, 46819],
  ["???????????? / ???", "NaikaiFont", 300, 46817],
  ["???????????? / ??????", "NaikaiFont", 200, 46817],

  ["????????????"],
  ["????????? ??? / ??????", "Kiwi Maru", 500, 8318],
  ["????????? ???", "Kiwi Maru", 400, 8318],
  ["????????? ??? / ???", "Kiwi Maru", 300, 8318],

  ["Satsuyako"],
  ["Yomogi", "Yomogi", 400, 8036],

  ["Kousuke NAGAI"],
  ["?????????????????????", "NewTegomin", 400, 7074],

  ["108go"],
  ["?????????", "Potta", 400, 7286],

  ["Kumiko Yoshida"],
  ["??????????????????", "Yusei Magic", 400, 7566],
  ["????????????-TTF / ??????", "Tanugo", 200, 7673],
  ["????????????-TTF / ???", "Tanugo", 300, 7673],
  ["????????????-TTF", "Tanugo", 400, 7673],
  ["????????????-TTF / ???", "Tanugo", 700, 7673],
  ["????????????-TTF / ???", "Tanugo Round", 300, 7673],
  ["????????????-TTF / ???", "Tanugo Round", 700, 7673],

  ["LingDong"],
  ["?????????", "QIJIC", 400, 21037],
]
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
var featurefonts = [
  ["????????????", "NaikaiFont", 400],
  ["????????????", "Noto Serif CJK TC", 400],
  ["????????????", "Taipei Sans TC", 400],
  ["cjk??????4", "JasonHandwriting4", 400],
  ["?????????", "jf-openhuninn-1-1", 400],
  ["Rampart", "Rampart One", 400]
]
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:image\" content=\"http:\u002F\u002Fxlfont.github.io\u002Fload\u002Fassets\u002Fimg\u002Fthumbnail.png\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:image:type\" content=\"image\u002Fpng\"\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:image:width\" content=\"1200\"\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:image:height\" content=\"630\"\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:title\" content=\"XL Font Load \u002F ????????????????????????\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:type\" content=\"article\"\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:url\" content=\"http:\u002F\u002Fxlfont.github.io\u002Fload\u002F\"\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:description\" content=\"??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\"\u003E";
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"article:author\" content=\"zbryikt\"\u003E";
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"article:section\" content=\"Taiwan\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta name=\"keywords\" content=\"webfont,font loader,cjk\"\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/bootstrap/main/dist/css/bootstrap.min.css");
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldloader/main/index.min.css");
;pug_debug_line = 113;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldbutton/main/index.min.css");
;pug_debug_line = 114;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/@loadingio/loading.css/main/loading.min.css");
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("css/index.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"root\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base\" style=\"max-width:90%;width:640px;height:480px;max-height:90%\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 119;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 d-flex flex-column\"\u003E";
;pug_debug_line = 120;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 position-relative p-4\"\u003E";
;pug_debug_line = 121;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 ld ld-over-inverse\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-ring ld-cycle\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 123;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Csvg class=\"w-100 h-100 border rounded shadow-sm\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdefs\u003E";
;pug_debug_line = 125;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003ClinearGradient id=\"lg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"\u003E";
;pug_debug_line = 126;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstop offset=\"0%\" stop-color=\"#f00\"\u003E\u003C\u002Fstop\u003E";
;pug_debug_line = 127;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstop offset=\"25%\" stop-color=\"#f90\"\u003E\u003C\u002Fstop\u003E";
;pug_debug_line = 128;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstop offset=\"50%\" stop-color=\"#9f0\"\u003E\u003C\u002Fstop\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstop offset=\"75%\" stop-color=\"#0f9\"\u003E\u003C\u002Fstop\u003E";
;pug_debug_line = 130;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstop offset=\"100%\" stop-color=\"#09f\"\u003E\u003C\u002Fstop\u003E\u003C\u002FlinearGradient\u003E\u003C\u002Fdefs\u003E";
;pug_debug_line = 131;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cpath fill=\"url(#lg)\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-end px-4 pb-4\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark\" data-ldcv-set=\"\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Close\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv bare position-fixed w-100\" id=\"gloader\" style=\"bottom:1em;opacity:.85\"\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base position-static\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner p-3 text-white bg-dark d-flex align-items-center\" style=\"line-height:1em\"\u003E";
;pug_debug_line = 135;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????? ";
;pug_debug_line = 135;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-spin ld-spinner ml-2\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 135;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 137;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "X\u003C\u002Fspan\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "L ";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "F\u003C\u002Fspan\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "ont ";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "L\u003C\u002Fspan\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "oad \u002F \u003C\u002Fspan\u003E";
;pug_debug_line = 139;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cruby\u003E";
;pug_debug_line = 140;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Crb\u003E";
;pug_debug_line = 140;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Frb\u003E";
;pug_debug_line = 141;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Crt\u003E";
;pug_debug_line = 141;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Frt\u003E\u003C\u002Fruby\u003E";
;pug_debug_line = 142;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 142;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"border-top\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 144;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex sticky pt-2 bg-white\" id=\"chooser\" style=\"top:0\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-group mb-2 mr-2\"\u003E";
;pug_debug_line = 146;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate featurefonts
;(function(){
  var $$obj = featurefonts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var font = $$obj[pug_index2];
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"btn btn-outline-dark\""+pug_attr("data-font", font[1], true, true)) + "\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var font = $$obj[pug_index2];
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"btn btn-outline-dark\""+pug_attr("data-font", font[1], true, true)) + "\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 148;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown\" style=\"display:inline-block;vertical-align:top\"\u003E";
;pug_debug_line = 149;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark dropdown-toggle\" data-toggle=\"dropdown\"\u003E";
;pug_debug_line = 149;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "More\u003C\u002Fdiv\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu shadow-sm\" style=\"max-height:400px;overflow:scroll;overscroll-behavior:contain\"\u003E";
;pug_debug_line = 151;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate fontlist
;(function(){
  var $$obj = fontlist;
  if ('number' == typeof $$obj.length) {
      for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
        var font = $$obj[$index];
;pug_debug_line = 152;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
if (font.length > 1) {
;pug_debug_line = 153;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item d-flex align-items-center\""+" href=\"#\""+pug_attr("data-font", font[1], true, true)+pug_attr("data-weight", font[2], true, true)) + "\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 155;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
if (font[3]) {
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Csmall class=\"text-muted ml-2\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[3]) ? "" : pug_interp));
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???\u003C\u002Fsmall\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 158;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
if ($index != 0) {
;pug_debug_line = 159;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 160;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header text-underline\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;
      var font = $$obj[$index];
;pug_debug_line = 152;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
if (font.length > 1) {
;pug_debug_line = 153;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item d-flex align-items-center\""+" href=\"#\""+pug_attr("data-font", font[1], true, true)+pug_attr("data-weight", font[2], true, true)) + "\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 155;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
if (font[3]) {
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Csmall class=\"text-muted ml-2\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[3]) ? "" : pug_interp));
;pug_debug_line = 156;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???\u003C\u002Fsmall\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
else {
;pug_debug_line = 158;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
if ($index != 0) {
;pug_debug_line = 159;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 160;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header text-underline\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

;pug_debug_line = 161;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 162;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header\"\u003E";
;pug_debug_line = 162;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 165;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 text-right\"\u003E";
;pug_debug_line = 166;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark\" data-target=\"svg\"\u003E";
;pug_debug_line = 166;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????? SVG\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 168;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ctextarea class=\"form-control\" rows=\"7\" placeholder=\"?????????????????????????????????????????????...\"\u003E\u003C\u002Ftextarea\u003E";
;pug_debug_line = 169;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["nbr"](2);
;pug_debug_line = 170;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 170;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????\u003C\u002Fh2\u003E";
;pug_debug_line = 171;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 171;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????????????????MB ????????????MB??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????????????????";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "X\u003C\u002Fspan\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "L ";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "F\u003C\u002Fspan\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "ont ";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "L\u003C\u002Fspan\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "oad = ";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "@xlfont\u002Fload\u003C\u002Fcode\u003E";
;pug_debug_line = 172;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ????????????\u003C\u002Fp\u003E";
;pug_debug_line = 173;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 174;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 174;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????????????????\u003C\u002Fli\u003E";
;pug_debug_line = 175;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 175;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????????????????\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 176;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 176;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ";
;pug_debug_line = 176;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 176;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "opentype.js\u003C\u002Fcode\u003E";
;pug_debug_line = 176;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 177;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 177;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????????????????????????????????????? ";
;pug_debug_line = 177;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 177;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "SIL Open Font License 1.1\u003C\u002Fcode\u003E";
;pug_debug_line = 177;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 178;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 178;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????????????????????????????????????????????????? 37 ???????????????\u003C\u002Fp\u003E";
;pug_debug_line = 179;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 180;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 180;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????? \u002F ???????????? \u002F ???????????? - ???????????????\u003C\u002Fli\u003E";
;pug_debug_line = 181;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 181;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????? - ????????? ~ ?????????\u003C\u002Fli\u003E";
;pug_debug_line = 182;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 182;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????? ( ????????????????????????????????? ) - ???????????????\u003C\u002Fli\u003E";
;pug_debug_line = 183;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 183;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????? ( Beta ??? ) - ???????????????\u003C\u002Fli\u003E";
;pug_debug_line = 184;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 184;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????? ( ????????????????????? ) - ??????????????????\u003C\u002Fli\u003E";
;pug_debug_line = 185;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 185;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "cjk??????4 ( ????????????4 ??? AI ????????? ) - ????????????\u003C\u002Fli\u003E";
;pug_debug_line = 186;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 186;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????? ( justfont ?????? Kosugi Maru ???????????? ) - ????????????\u003C\u002Fli\u003E";
;pug_debug_line = 187;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 187;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Fontworks ?????? ( ???????????? ) - ????????? ~ ?????????\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 188;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 189;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 189;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????????????????????????????????????????\u003C\u002Fh3\u003E";
;pug_debug_line = 190;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 190;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 191;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 192;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 192;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????????????????\u003C\u002Fh2\u003E";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????????????? ";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\u002Fload\"\u003E";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Github ?????????\u003C\u002Fa\u003E";
;pug_debug_line = 193;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ???????????????????????????????????? Git ??????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????? ";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "npm\u003C\u002Fcode\u003E";
;pug_debug_line = 194;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???\u003C\u002Fp\u003E";
;pug_debug_line = 195;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cpre class=\"code\"\u003E";
;pug_debug_line = 196;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "npm install --save @xlfont\u002Fload";
;pug_debug_line = 197;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 197;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "npx xfl -o [out-dir] [font-dir] # ??????????????????\u003C\u002Fpre\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????????????????????????? ";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "dist\u002Findex.js\u003C\u002Fcode\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ????????????\u003C\u002Fp\u003E";
;pug_debug_line = 199;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cpre class=\"code\"\u003E";
;pug_debug_line = 200;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "&lt;script src=\"path-to-dist\u002Findex.js\"&gt;&lt;\u002Fscript&gt;";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 201;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "&lt;script&gt;";
;pug_debug_line = 202;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 202;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "  xfl.load({path: \"path-to-dist\u002Fxl-font-folder\"})";
;pug_debug_line = 203;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 203;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "    .then(function(font) {";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 204;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "      font.sync(\"?????????????????????@xlfont\u002Fload ?????????????????????????????????\");";
;pug_debug_line = 205;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 205;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "    });";
;pug_debug_line = 206;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 206;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "&lt;\u002Fscript&gt;\u003C\u002Fpre\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????????????? ";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002F@xlfont\u002Fload\u002Fblob\u002Fmaster\u002FREADME.md\"\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Github ??????????????? README.md ??????\u003C\u002Fa\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???\u003C\u002Fp\u003E";
;pug_debug_line = 209;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 210;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????????????????????????????\u003C\u002Fh3\u003E";
;pug_debug_line = 211;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 211;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 212;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fli\u003E";
;pug_debug_line = 214;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 214;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 215;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 215;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ";
;pug_debug_line = 215;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 215;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "@xlfont\u002Fload\u003C\u002Fcode\u003E";
;pug_debug_line = 215;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 216;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 216;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? keystroke ????????????????????? API Call ??????????????????????????????????????? API ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 217;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 217;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Cloudflare ??? CDN ???????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E";
;pug_debug_line = 218;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 219;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 219;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????? unicode-range ?????????????????????????????????\u003C\u002Fh3\u003E";
;pug_debug_line = 220;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 220;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E\u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E ???????????? \u003Ccode\u003E@font-family\u003C\u002Fcode\u003E ????????????????????????????????????????????? \u003Ccode\u003E@font-family\u003C\u002Fcode\u003E ?????????????????????????????????????????????????????????????????????????????? \u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E ????????????????????????????????????????????????????????? \u003Ccode\u003Eunicode-range\u003C\u002Fcode\u003E ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JS ?????? xlfont ?????????\u003C\u002Fp\u003E\n\u003C\u002Fp\u003E";
;pug_debug_line = 221;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 221;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E?????????\u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E ????????? \u003Ccode\u003Eopentype.js\u003C\u002Fcode\u003E ????????????????????????????????????????????????????????????????????????????????????\u003C\u002Fp\u003E\n\u003C\u002Fp\u003E";
;pug_debug_line = 222;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 224;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 224;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????????????? \u002F ???????????? \u002F ?????????????????? \u002F ???????????????\u003C\u002Fh3\u003E";
;pug_debug_line = 225;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 225;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????????????????????????????????????????????????????????????????????????????????????????????????? ";
;pug_debug_line = 225;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\u002Fload\u002Fissues\"\u003E";
;pug_debug_line = 225;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Github Issues\u003C\u002Fa\u003E";
;pug_debug_line = 225;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ????????????\u003C\u002Fp\u003E";
;pug_debug_line = 226;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 227;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 228;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"footer\"\u003E";
;pug_debug_line = 229;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 229;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "source code copyrighted ";
;pug_debug_line = 229;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fzbryikt\"\u003E";
;pug_debug_line = 229;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "@zbryikt\u003C\u002Fa\u003E";
;pug_debug_line = 229;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " released under MIT License\u003C\u002Fdiv\u003E";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "source in ";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\u002Fload\"\u003E";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Github Repo\u003C\u002Fa\u003E";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " \u002F font files in ";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\"\u003E";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Another Github Repo\u003C\u002Fa\u003E";
;pug_debug_line = 230;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 232;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/bootstrap.native/main/dist/bootstrap-native-v4.min.js");
;pug_debug_line = 233;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/index.min.js");
;pug_debug_line = 234;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@loadingio/debounce.js/main/index.min.js");
;pug_debug_line = 235;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
;pug_debug_line = 236;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/ldloader/main/index.min.js");
;pug_debug_line = 237;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/proxise/main/index.min.js");
;pug_debug_line = 238;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@plotdb/opentype.js/main/dist/opentype.js");
;pug_debug_line = 239;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/@xlfont/load/dev/index.min.js");
;pug_debug_line = 240;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("js/index.js");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "featurefonts" in locals_for_with ?
        locals_for_with.featurefonts :
        typeof featurefonts !== 'undefined' ? featurefonts : undefined, "fontlist" in locals_for_with ?
        locals_for_with.fontlist :
        typeof fontlist !== 'undefined' ? fontlist : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 