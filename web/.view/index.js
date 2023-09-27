 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, featurefonts, fontlist, hashfile, libLoader, md5, scriptLoader, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
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

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
if (!(libLoader || scriptLoader)) {
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
if(!decache) { decache = (version? "?v=" + version : ""); }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
if(!cssLoader) { cssLoader = {url: {}}; }
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
cssLoader.config = (config ? config : {});
if (!cssLoader.url[url]) {
cssLoader.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }







}
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
for (var i = 0; i < count; i++)
{
pug_html = pug_html + "\u003Cbr\u003E";
}
};
var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













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
  ["思源宋體 / 極細", "Noto Serif CJK TC", 200, 65535],
  ["思源宋體 / 細", "Noto Serif CJK TC", 300, 65535],
  ["思源宋體", "Noto Serif CJK TC", 400, 65535],
  ["思源宋體 / 適中", "Noto Serif CJK TC", 500, 65535],
  ["思源宋體 / 次粗", "Noto Serif CJK TC", 600, 65535],
  ["思源宋體 / 粗", "Noto Serif CJK TC", 700, 65535],
  ["思源宋體 / 濃", "Noto Serif CJK TC", 900, 43029],

  ["思源黑體 / 極細", "Noto Sans CJK TC", 100, 65535],
  ["思源黑體 / 細", "Noto Sans CJK TC", 200, 65535],
  ["思源黑體 / 次細", "Noto Sans CJK TC", 300, 65535],
  ["思源黑體", "Noto Sans CJK TC", 400, 65535],
  ["思源黑體 / 適中", "Noto Sans CJK TC", 500, 65535],
  ["思源黑體 / 粗", "Noto Sans CJK TC", 700, 65535],
  ["思源黑體 / 濃", "Noto Sans CJK TC", 900, 65535],

  ["思源等寬", "Noto Sans Mono CJK TC", 400, 65535],
  ["思源等寬 / 粗", "Noto Sans Mono CJK TC", 700, 65535],

  ["cjkFonts x 清松手寫體"],
  ["cjk手寫4", "JasonHandwriting4", 400, "12201"],

  ["justfont"],
  ["粉圓體", "jf-openhuninn-1-1", 400, "9676"],

  ["flopdesign"],
  ["裝甲明朝", "SoukouMincho", 400, "9803"],

  ["翰字鑄造JT Foundry"],
  ["台北黑體 / 粗", "Taipei Sans TC", 700, "32732"],
  ["台北黑體", "Taipei Sans TC", 400, "32731"],
  ["台北黑體 / 細", "Taipei Sans TC", 300, "32762"],

  ["GlyphWiki"],
  ["花園明朝A", "HanaminA", 400, "41494"],
  ["花園明朝B", "HanaminB", 400, "60418"],

  ["瀨戶家族 x Max"],
  ["內海字體 / 粗", "NaikaiFont", 700, 46817],
  ["內海字體 / 次粗", "NaikaiFont", 600, 46817],
  ["內海字體", "NaikaiFont", 400, 46819],
  ["內海字體 / 細", "NaikaiFont", 300, 46817],
  ["內海字體 / 極細", "NaikaiFont", 200, 46817],

  ["もじワク"],
  ["キウイ 丸 / 適中", "Kiwi Maru", 500, 8318],
  ["キウイ 丸", "Kiwi Maru", 400, 8318],
  ["キウイ 丸 / 細", "Kiwi Maru", 300, 8318],

  ["Satsuyako"],
  ["Yomogi", "Yomogi", 400, 8036],

  ["Kousuke NAGAI"],
  ["ニューテゴミン", "NewTegomin", 400, 7074],

  ["108go"],
  ["ポッタ", "Potta", 400, 7286],

  ["Kumiko Yoshida"],
  ["油性マジック", "Yusei Magic", 400, 7566],
  ["たぬゴ角-TTF / 極細", "Tanugo", 200, 7673],
  ["たぬゴ角-TTF / 細", "Tanugo", 300, 7673],
  ["たぬゴ角-TTF", "Tanugo", 400, 7673],
  ["たぬゴ角-TTF / 粗", "Tanugo", 700, 7673],
  ["たぬゴ丸-TTF / 細", "Tanugo Round", 300, 7673],
  ["たぬゴ丸-TTF / 粗", "Tanugo Round", 700, 7673],

  ["LingDong"],
  ["齊伋體", "QIJIC", 400, 21037],
]
var featurefonts = [
  ["內海字體", "NaikaiFont", 400],
  ["思源宋體", "Noto Serif CJK TC", 400],
  ["台北黑體", "Taipei Sans TC", 400],
  ["cjk手寫4", "JasonHandwriting4", 400],
  ["粉圓體", "jf-openhuninn-1-1", 400],
  ["Rampart", "Rampart One", 400]
]
pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E\u003Cmeta property=\"og:image\" content=\"http:\u002F\u002Fxlfont.github.io\u002Fload\u002Fassets\u002Fimg\u002Fthumbnail.png\"\u003E\u003Cmeta property=\"og:image:type\" content=\"image\u002Fpng\"\u003E\u003Cmeta property=\"og:image:width\" content=\"1200\"\u003E\u003Cmeta property=\"og:image:height\" content=\"630\"\u003E\u003Cmeta property=\"og:title\" content=\"XL Font Load \u002F 大尺寸字型載入器\"\u003E\u003Cmeta property=\"og:type\" content=\"article\"\u003E\u003Cmeta property=\"og:url\" content=\"http:\u002F\u002Fxlfont.github.io\u002Fload\u002F\"\u003E\u003Cmeta property=\"og:description\" content=\"這個專案實作了一個快速中文字型載入模組，將字型檔依字頻切成小塊，再根據網頁內容選擇需要載入的字型子集\"\u003E\u003Cmeta property=\"article:author\" content=\"zbryikt\"\u003E\u003Cmeta property=\"article:section\" content=\"Taiwan\"\u003E\u003Cmeta name=\"keywords\" content=\"webfont,font loader,cjk\"\u003E";
pug_mixins["css"]("assets/lib/bootstrap/main/dist/css/bootstrap.min.css");
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
pug_mixins["css"]("assets/lib/ldloader/main/index.min.css");
pug_mixins["css"]("assets/lib/ldbutton/main/index.min.css");
pug_mixins["css"]("assets/lib/@loadingio/loading.css/main/loading.min.css");
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
pug_mixins["css"]("css/index.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"root\"\u003E\u003Cdiv class=\"ldcv\"\u003E\u003Cdiv class=\"base\" style=\"max-width:90%;width:640px;height:480px;max-height:90%\"\u003E\u003Cdiv class=\"inner\"\u003E\u003Cdiv class=\"w-100 h-100 d-flex flex-column\"\u003E\u003Cdiv class=\"flex-grow-1 position-relative p-4\"\u003E\u003Cdiv class=\"w-100 h-100 ld ld-over-inverse\"\u003E\u003Cdiv class=\"ld ld-ring ld-cycle\"\u003E\u003C\u002Fdiv\u003E\u003Csvg class=\"w-100 h-100 border rounded shadow-sm\"\u003E\u003Cdefs\u003E\u003ClinearGradient id=\"lg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"\u003E\u003Cstop offset=\"0%\" stop-color=\"#f00\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"25%\" stop-color=\"#f90\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"50%\" stop-color=\"#9f0\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"75%\" stop-color=\"#0f9\"\u003E\u003C\u002Fstop\u003E\u003Cstop offset=\"100%\" stop-color=\"#09f\"\u003E\u003C\u002Fstop\u003E\u003C\u002FlinearGradient\u003E\u003C\u002Fdefs\u003E\u003Cpath fill=\"url(#lg)\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex justify-content-end px-4 pb-4\"\u003E\u003Cdiv class=\"btn btn-outline-dark\" data-ldcv-set=\"\"\u003EClose\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ldcv bare position-fixed w-100\" id=\"gloader\" style=\"bottom:1em;opacity:.85\"\u003E\u003Cdiv class=\"base position-static\"\u003E\u003Cdiv class=\"inner p-3 text-white bg-dark d-flex align-items-center\" style=\"line-height:1em\"\u003E字體載入中 \u003Cdiv class=\"ld ld-spin ld-spinner ml-2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ch1\u003E\u003Cspan\u003E\u003Cspan class=\"text-danger\"\u003EX\u003C\u002Fspan\u003EL \u003Cspan class=\"text-danger\"\u003EF\u003C\u002Fspan\u003Eont \u003Cspan class=\"text-danger\"\u003EL\u003C\u002Fspan\u003Eoad \u002F \u003C\u002Fspan\u003E\u003Cruby\u003E\u003Crb\u003E大尺寸\u003C\u002Frb\u003E\u003Crt\u003E中日韓\u003C\u002Frt\u003E\u003C\u002Fruby\u003E\u003Cspan\u003E字型載入器\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\u003Cdiv class=\"border-top\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex sticky pt-2 bg-white\" id=\"chooser\" style=\"top:0\"\u003E\u003Cdiv class=\"btn-group mb-2 mr-2\"\u003E";
// iterate featurefonts
;(function(){
  var $$obj = featurefonts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var font = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"btn btn-outline-dark\""+pug_attr("data-font", font[1], true, true)) + "\u003E" + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var font = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"btn btn-outline-dark\""+pug_attr("data-font", font[1], true, true)) + "\u003E" + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown\" style=\"display:inline-block;vertical-align:top\"\u003E\u003Cdiv class=\"btn btn-outline-dark dropdown-toggle\" data-toggle=\"dropdown\"\u003EMore\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu shadow-sm\" style=\"max-height:400px;overflow:scroll;overscroll-behavior:contain\"\u003E";
// iterate fontlist
;(function(){
  var $$obj = fontlist;
  if ('number' == typeof $$obj.length) {
      for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
        var font = $$obj[$index];
if (font.length > 1) {
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item d-flex align-items-center\""+" href=\"#\""+pug_attr("data-font", font[1], true, true)+pug_attr("data-weight", font[2], true, true)) + "\u003E\u003Cdiv class=\"flex-grow-1\"\u003E" + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if (font[3]) {
pug_html = pug_html + "\u003Csmall class=\"text-muted ml-2\"\u003E" + (pug_escape(null == (pug_interp = font[3]) ? "" : pug_interp)) + "字\u003C\u002Fsmall\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
else {
if ($index != 0) {
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header text-underline\"\u003E" + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;
      var font = $$obj[$index];
if (font.length > 1) {
pug_html = pug_html + "\u003Ca" + (" class=\"dropdown-item d-flex align-items-center\""+" href=\"#\""+pug_attr("data-font", font[1], true, true)+pug_attr("data-weight", font[2], true, true)) + "\u003E\u003Cdiv class=\"flex-grow-1\"\u003E" + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if (font[3]) {
pug_html = pug_html + "\u003Csmall class=\"text-muted ml-2\"\u003E" + (pug_escape(null == (pug_interp = font[3]) ? "" : pug_interp)) + "字\u003C\u002Fsmall\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
else {
if ($index != 0) {
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header text-underline\"\u003E" + (pug_escape(null == (pug_interp = font[0]) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E以下空白\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex-grow-1 text-right\"\u003E\u003Cdiv class=\"btn btn-outline-dark\" data-target=\"svg\"\u003E輸出 SVG\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ctextarea class=\"form-control\" rows=\"7\" placeholder=\"在這邊隨便輸入一些中文字看看吧...\"\u003E\u003C\u002Ftextarea\u003E";
pug_mixins["nbr"](2);
pug_html = pug_html + "\u003Ch2\u003E這是什麼？\u003C\u002Fh2\u003E\u003Cp\u003E中文字型向來動輒數MB 甚至數十MB，若要做為網路字型使用往往很卡。其它解決方案大多是商業付費服務，而且針對動態內容，要嘛做不好，亦或成本很高。\u003C\u002Fp\u003E\u003Cp\u003E針對這個問題，\u003Cspan class=\"text-danger\"\u003EX\u003C\u002Fspan\u003EL \u003Cspan class=\"text-danger\"\u003EF\u003C\u002Fspan\u003Eont \u003Cspan class=\"text-danger\"\u003EL\u003C\u002Fspan\u003Eoad = \u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E 實作了：\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003E中文字型切割工具\u003C\u002Fli\u003E\u003Cli\u003E中文字型載入模組\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp\u003E先使用切割工具將字型依字頻切成小塊後，再使用載入器根據網頁內容選擇需要載入的字型子集，因此我們可以快速的選取想要的字型，套用在網站上。切割過後的字型亦可搭配 \u003Ccode\u003Eopentype.js\u003C\u002Fcode\u003E 於前、後端進行字型組合。\u003C\u002Fp\u003E\u003Cp\u003E另一方面，此專案亦收集了下列等以 \u003Ccode\u003ESIL Open Font License 1.1\u003C\u002Fcode\u003E 釋出的免費、可商用開放中文字型，包含黑、宋、圓、手寫、風格等類型的字體，亦提供預先切割好的字型模組，可直接分支使用，不需再花時間自行搜集處理。\u003C\u002Fp\u003E\u003Cp\u003E以下為目前我們整理的字型列表，含不同樣式共 37 個字型檔：\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003E思源黑體 \u002F 思源宋體 \u002F 思源等寬 - 約六萬餘字\u003C\u002Fli\u003E\u003Cli\u003E花園明朝 - 約四萬 ~ 六萬字\u003C\u002Fli\u003E\u003Cli\u003E內海字體 ( 瀨戶、小瀨、全瀨整合版 ) - 約四萬餘字\u003C\u002Fli\u003E\u003Cli\u003E台北黑體 ( Beta 版 ) - 約三萬餘字\u003C\u002Fli\u003E\u003Cli\u003E裝甲明朝 ( 思源宋體之變體 ) - 約一萬五千字\u003C\u002Fli\u003E\u003Cli\u003Ecjk手寫4 ( 清松手寫4 的 AI 補完版 ) - 約一萬字\u003C\u002Fli\u003E\u003Cli\u003E粉圓體 ( justfont 基於 Kosugi Maru 的改良版 ) - 約一萬字\u003C\u002Fli\u003E\u003Cli\u003EFontworks 系列 ( 日文字型 ) - 約五千 ~ 一萬字\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cbr\u003E\u003Ch3\u003E我可以整理自己的中文字型集嗎？\u003C\u002Fh3\u003E\u003Cp\u003E可以！此專案連同編譯程式碼一同釋出，可自動編譯切割指定之字型檔。\u003C\u002Fp\u003E\u003Cbr\u003E\u003Ch2\u003E我要怎麼取得跟使用？\u003C\u002Fh2\u003E\u003Cp\u003E此專案託管於 \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\u002Fload\"\u003EGithub 專案庫\u003C\u002Fa\u003E ，你可以造訪該網址並利用 Git 分支，或者直接下載整包模組。\u003C\u002Fp\u003E\u003Cp\u003E你亦可使用 \u003Ccode\u003Enpm\u003C\u002Fcode\u003E：\u003C\u002Fp\u003E\u003Cpre class=\"code\"\u003Enpm install --save @xlfont\u002Fload\nnpx xfl -o [out-dir] [font-dir] # 字型切割工具\u003C\u002Fpre\u003E\u003Cp\u003E前端字型載入器則引入 \u003Ccode\u003Edist\u002Findex.js\u003C\u002Fcode\u003E 後使用：\u003C\u002Fp\u003E\u003Cpre class=\"code\"\u003E&lt;script src=\"path-to-dist\u002Findex.js\"&gt;&lt;\u002Fscript&gt;\n&lt;script&gt;\n  xfl.load({path: \"path-to-dist\u002Fxl-font-folder\"})\n    .then(function(font) {\n      font.sync(\"給定一些文字，@xlfont\u002Fload 就會幫你抓對應的字型檔\");\n    });\n&lt;\u002Fscript&gt;\u003C\u002Fpre\u003E\u003Cp\u003E詳細的文件請參照 \u003Ca href=\"https:\u002F\u002Fgithub.com\u002F@xlfont\u002Fload\u002Fblob\u002Fmaster\u002FREADME.md\"\u003EGithub 專案庫中的 README.md 文件\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\u003Cbr\u003E\u003Ch3\u003E與其它的網路字型服務比較？\u003C\u002Fh3\u003E\u003Cp\u003E網路字型服務一般有兩個重點：\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003E自有字型\u003C\u002Fli\u003E\u003Cli\u003E網頁字型服務\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp\u003E自有字型不用說，大部份字型服務提供者的商業核心還是在其高品質的自有字型，這是字型工具無法提供的。而在網頁字型服務這點，因為 \u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E 套件缺乏動態後端組字機制，嚴格來說也無法取代動態生成式的網路字型服務。況且，一旦牽涉到後端組字，就算是自幹也會有主機跟流量的成本，因此除非有大量需求來攤平成本，否則使用這類服務的性價比一般還是會比自幹高。\u003C\u002Fp\u003E\u003Cp\u003E什麼時候會有大量需求的情境？比方說，若我們開發用戶可以自選字型的網頁編輯工具，用戶的每一個 keystroke 都可能導致一次 API Call ，但網頁字型服務往往就是以 API 呼叫次數做計費基準，我們又不太可能限制用戶打字的次數，這種情境下使用以次計價的服務就顯得不太實際。\u003C\u002Fp\u003E\u003Cp\u003E此外靜態字型子集較動態生成的字型檔來說在快取上較有優勢。若預期字型檔不會頻繁更新，可以設定較長的快取週期，並可搭配 Cloudflare 等 CDN 服務，可以獲得更快速的內容發送以及更少的流量負擔。\u003C\u002Fp\u003E\u003Cbr\u003E\u003Ch3\u003E何不使用 unicode-range 機制來做前端載入就好？\u003C\u002Fh3\u003E\u003Cp\u003E\u003Cp\u003E\u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E 的確使用 \u003Ccode\u003E@font-family\u003C\u002Fcode\u003E 來設定字型子集的資訊，只是因為 \u003Ccode\u003E@font-family\u003C\u002Fcode\u003E 樣式是依字碼做動態生成，因此需要前端程式來做。而因為 \u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E 的子集依字頻而非語言分組，若想完全依賴 \u003Ccode\u003Eunicode-range\u003C\u002Fcode\u003E 來描述各字碼對應之字型子集，需要表列相當大量的字碼。當然這仍然是一個可行的方式，我們可以考慮在未來版本支援無 JS 版的 xlfont 載入。\u003C\u002Fp\u003E\n\u003C\u002Fp\u003E\u003Cp\u003E\u003Cp\u003E此外，\u003Ccode\u003E@xlfont\u002Fload\u003C\u002Fcode\u003E 仍基於 \u003Ccode\u003Eopentype.js\u003C\u002Fcode\u003E 提供前端字型組合的機制，可用於根據子集繪制對應的向量檔。\u003C\u002Fp\u003E\n\u003C\u002Fp\u003E\u003Cbr\u003E\u003Ch3\u003E換字型會閃 \u002F 打字會閃 \u002F 載入還是很久 \u002F 字型有缺字\u003C\u002Fh3\u003E\u003Cp\u003E以靜態方式實作網路字型仍然受限於瀏覽器技術，但若有任何問題，都可以在 \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\u002Fload\u002Fissues\"\u003EGithub Issues\u003C\u002Fa\u003E 中提出。\u003C\u002Fp\u003E\u003Cbr\u003E\u003Chr\u003E\u003Cdiv id=\"footer\"\u003E\u003Cdiv\u003Esource code copyrighted \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fzbryikt\"\u003E@zbryikt\u003C\u002Fa\u003E released under MIT License\u003C\u002Fdiv\u003E\u003Cdiv\u003Esource in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\u002Fload\"\u003EGithub Repo\u003C\u002Fa\u003E \u002F font files in \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fxlfont\"\u003EAnother Github Repo\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]("assets/lib/bootstrap.native/main/dist/bootstrap-native-v4.min.js");
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/index.min.js");
pug_mixins["script"]("assets/lib/@loadingio/debounce.js/main/index.min.js");
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
pug_mixins["script"]("assets/lib/ldloader/main/index.min.js");
pug_mixins["script"]("assets/lib/proxise/main/index.min.js");
pug_mixins["script"]("assets/lib/@plotdb/opentype.js/main/dist/opentype.js");
pug_mixins["script"]("assets/lib/@xlfont/load/dev/index.min.js");
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
        typeof fontlist !== 'undefined' ? fontlist : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 