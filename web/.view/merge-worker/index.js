 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (JSON, b64img, blockLoader, cssLoader, decache, escape, scriptLoader, version) {
      ;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fxlfont\u002Fload\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Fdist\u002Findex.pug";













;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cbase href=\"\u002F\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["css"]("assets/lib/bootstrap/main/css/bootstrap.min.css");
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldloader/main/index.min.css");
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldbutton/main/ldbtn.min.css");
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["css"]("assets/lib/@loadingio/loading.css/main/loading.min.css");
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cbody class=\"ld-over-full-inverse running\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-spinner ld-spin text-lg\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "測試用的網頁\u003C\u002Fh3\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E隨機文章 :\n【手作】DIY口罩套～把口罩留給最需要的人\n【冰箱收納推薦】韓國昌信冰箱收納組合A、收納界天后二寶媽激推\n最適合宅在家健身的極速調重啞鈴\nSponsored NutroOne\n香烤自製黑糖紅豆年糕～QQ的像烤麻糬一樣好吃！\u003C\u002Fp\u003E\n\u003Cp\u003E租屋族、小資族大力推薦【美夢雲・舒眠記憶棉床墊】超高CP值，全新舒壓體驗，輕鬆享受無負擔的極致好眠！\u003C\u002Fp\u003E\n\u003Cp\u003ESponsored 美夢雲\u003C\u002Fp\u003E\n\u003Cp\u003E優格椰果鳳梨酥～親子烘培\u003C\u002Fp\u003E\n\u003Cp\u003E和和恬藥膳廚房\u002F藥膳飲品\u002F枸杞艾草山楂牛軋糖禮盒-日常漢方保養好健康\n您也可能喜歡這些文章:\n帥女孩改變人生的決定，實現挺胸的渴望！#風華平胸手術\nPR\n睡覺也能撫平皺紋？只要1滴300%高濃度，14天緊緻拉提！\nPR\n【桃園八德】親子好去處 |自助式烤肉 | 角樂園農場\n分享COVID-19疫情期間赴美\u003Cdel\u003E出國難回國更難 合12 洪玲妙\n不怕頭髮沒長只怕長太多！用了日本樂天連續6年NO.1的養髮液，再也不擔心禿頭！\nPR\n另一半的手是用來牽的 ! 解放洗碗的粗糙手，婚姻幸福就靠Bosch洗碗機神隊友 !\nPR\nRecommended by\n歷史上的今天:\n【走走家具新品體驗】走走模組沙發～讓居家生活更有品味！(2020-10-06)\n幸福彤話 \u002F Xuite日誌 \u002F 回應(1) \u002F 引用(0)\n簡單自製優格\u003C\u002Fdel\u003E雙槽電子鍋簡單食...|日誌首頁|清蒸檸檬鱸魚\n引用\n本文的引用網址　 \u003Ca href=\"https:\u002F\u002Fblog.xuite.net\u002Ffuli520520new\u002Fyogurt\u002F590059145\u002Ftrack\"\u003Ehttps:\u002F\u002Fblog.xuite.net\u002Ffuli520520new\u002Fyogurt\u002F590059145\u002Ftrack\u003C\u002Fa\u003E\u003Cbr\u003E第一頁  上一頁  1 下一頁  最後頁 \n回應\n2021-10-20 00:20:01從cht登入的Xuite站長群 前往Xuite站長群的日誌\n親愛的日誌格友 您好，\u003C\u002Fp\u003E\n\u003Cp\u003E由於您的日誌文章創作內容優質，我們將推薦您所發表的這篇文章呈列於日誌首頁的 首選推薦 當中，格友們可藉由點閱優質日誌文章同時，亦可學習觀摩。\u003C\u002Fp\u003E\n\u003Cp\u003E感謝您對 Xuite日誌 的支持，期待您更多的優質創作，讓 Xuite日誌 能更美好。\u003C\u002Fp\u003E\n\u003Cp\u003EXuite站長群\u003C\u002Fp\u003E\n\u003Cp\u003E第一頁  上一頁  1 下一頁  最後頁 \nFB粉絲頁\u003C\u002Fp\u003E\n\u003Cp\u003E文章分類\n全部展開|全部收合\n幸福彤話&amp;君辰愛分享居家生活\n君辰沛愛分享育兒好物\n幸福彤話&amp;君辰愛分享禮盒推薦\n幸福彤話&amp;君辰愛分享美食推薦\n幸福彤話&amp;君辰愛分享清潔用品\n幸福彤話&amp;君辰愛分享防疫好物\n幸福彤話&amp;君辰愛分享廚房好物\n幸福彤話&amp;君辰愛分享健康保健\n君辰沛愛分享寶寶點心副食品\n君辰愛分享保養、沐浴、彩妝\n幸福彤話育兒交流\n芳蓉優格影片教學\n芳蓉優格DIY教學\n國際牌水波爐料理\n氣炸鍋烤箱料理食譜\n親子烘焙點心料理\nDIY優格飲品\nDIY早餐食譜\n芳蓉DIY花果茶料理\n芳蓉DIY輕食優格\n芳蓉DIY優格蛋糕\n萬聖節搞怪派對點心\n芳蓉家常菜食譜\nDIY優格麵包\nDIY饅頭\n聖誕節派對點心\n蒸煮湯包的好方法\n熱壓三明治鬆餅機食譜\n電烤盤料理食譜\n特福智能萬用鍋食譜\n雙槽電子鍋料理食譜\n最新文章\n【優格機推薦】芳蓉優格機\u002F芳蓉優格定時控溫優格機-美味優格輕鬆做\n熱壓蟹肉棒蔥抓餅\u003Cdel\u003E雙盤熱壓機食譜\n原味時代\u002F減醣貝果\u002F手工窯烤Pizza\u002F千張月亮蝦餅\u002F減醣料理新選擇\n義大利Giaretti 珈樂堤\u002F手持平掛兩用蒸氣熨斗\u002F掛燙機\u002F極緻美感\u002F輕鬆整平衣物\u002F即燙即穿超簡單\n芒果優格蛋糕捲～雙盤熱壓機食譜\n簡單醬燒牛肉&amp;醬燒雞腿鍋巴飯\u003C\u002Fdel\u003E雙槽電子鍋簡單食譜\n酸V酸V的檸檬塔~雙盤熱壓機食譜\nSONGEN松井\u002F芳饗宴多功能蒸煮料理鍋\u002F4L大容量\u002F煎\u002F煮\u002F炒\u002F燉樣樣行\n熱壓香Q優格地瓜球～雙盤熱壓機食譜\n鉅瑋商城\u002FLICK力可潔多功能擦拭布-柔韌款&amp;柔厚款\u002F可水洗不易破\u002FSGS檢驗合格好安心\n酥皮蘋果派\u002F\u003C\u002Fp\u003E\n\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/bootstrap.native/main/bootstrap-native-v4.min.js");
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 117;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/ldloader/main/index.min.js");
;pug_debug_line = 119;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/proxise/main/proxise.min.js");
;pug_debug_line = 120;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/@plotdb/opentype.js/main/opentype.js");
;pug_debug_line = 121;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_mixins["script"]("assets/lib/@xlfont/load/dev/xfl.js");
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Fmerge-worker\u002Findex.pug";
pug_html = pug_html + "\u002F*\nattempt to merge subfonts back to enhance font loading experience.\n\ntoo many font files with css leads to progressively loading and FOUT.\nhowever, merge files with JS take quite long if we also merge the major font file ( 1.ttf )\na hybrid method may work ( 1.ttf + merge.ttf with css ), as demonstrated below.\n\n*\u002F\nvar times, workerFromRemote;\ntimes = {};\nworkerFromRemote = function(){\n  var base;\n  base = \"\u002Fassets\u002Ffonts\u002Fcjk手寫4\";\n  base = \"https:\u002F\u002Fxlfont.maketext.io\u002Flinks\u002FJasonHandwriting4\u002Fnormal\u002F400\";\n  return ld$.fetch('\u002Fjs\u002Fmerge-worker\u002Fworker.js', {\n    method: 'GET'\n  }, {\n    type: 'text'\n  }).then(function(it){\n    var url, worker, list, ps;\n    console.log(it);\n    url = URL.createObjectURL(new Blob([it], {\n      type: \"text\u002Fjavascript\"\n    }));\n    worker = new Worker(url);\n    worker.onmessage = function(e){\n      var blob, url, style;\n      console.log(\"response:\", e, e.data);\n      times.t3 = Date.now();\n      console.log('arraybuffer generated, preparing style');\n      blob = new Blob([e.data], {\n        type: \"font\u002Fotf\"\n      });\n      url = URL.createObjectURL(blob);\n      style = document.createElement(\"style\");\n      style.setAttribute('type', \"text\u002Fcss\");\n      style.textContent = \"@font-face {\\n  font-family: test-font;\\n  src: url(\\\"\" + url + \"\\\") format('woff');\\n}\\n@font-face {\\n  font-family: test-font;\\n  src: url(\\\"\" + base + \"\u002F1.woff2\\\") format('woff2');\\n}\\nbody { font-family: test-font }\";\n      document.head.appendChild(style);\n      times.t4 = Date.now();\n      console.log('style added');\n      console.log(((times.t2 - times.t1) \u002F 1000).toFixed(2) + \"s\");\n      console.log(((times.t3 - times.t2) \u002F 1000).toFixed(2) + \"s\");\n      console.log(((times.t4 - times.t3) \u002F 1000).toFixed(2) + \"s\");\n      console.log(((times.t4 - times.t1) \u002F 1000).toFixed(2) + \"s\");\n      return document.body.classList.remove('running');\n    };\n    times.t1 = Date.now();\n    list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(function(it){\n      return base + \"\u002F\" + it + \".woff\";\n    });\n    ps = list.map(function(url){\n      return ld$.fetch(url, {\n        method: 'GET'\n      }).then(function(it){\n        return it.arrayBuffer();\n      });\n    });\n    return Promise.all(ps).then(function(abs){\n      worker.postMessage(abs);\n      return times.t2 = Date.now();\n    });\n  });\n};\nworkerFromRemote();\n\u002F*\nconsole.log 'load fonts...'\nps = list.map (url) -\u003E opentype.load url .then -\u003E it\nPromise.all ps\n  .then (fonts) -\u003E\n    console.log fonts\n    t2 = Date.now!\n    font = fonts.0\n    console.log 'fonts loaded, merging...'\n    glyphs = []\n    for font in fonts =\u003E\n      for i from 0 til font.glyphs.length =\u003E\n        glyphs.push font.glyphs.glyphs[i]\n\n    font = fonts.0\n    nf = new opentype.Font({glyphs: glyphs} \u003C\u003C\u003C {\n      familyName: font.names.fontFamily.en, styleName: font.names.fontSubfamily.en\n    } \u003C\u003C\u003C font{unitsPerEm, ascender, descender})\n    ab = font.toArrayBuffer!\n    console.log ab\n    t3 = Date.now!\n    console.log 'arraybuffer generated, preparing style'\n    blob = new Blob [ab], {type: \"font\u002Fotf\"}\n    url = URL.createObjectURL blob\n    style = document.createElement(\"style\")\n    style.setAttribute \\type, \"text\u002Fcss\"\n    style.textContent = \"\"\"\n    @font-face {\n      font-family: test-font;\n      src: url(\"#url\") format('opentype');\n    }\n    body { font-family: test-font }\n    \"\"\"\n    document.head.appendChild style\n    t4 = Date.now!\n    console.log 'style added' \n    console.log \"#{((t2 - t1)\u002F1000).toFixed(2)}s\"\n    console.log \"#{((t3 - t2)\u002F1000).toFixed(2)}s\"\n    console.log \"#{((t4 - t3)\u002F1000).toFixed(2)}s\"\n    console.log \"#{((t4 - t1)\u002F1000).toFixed(2)}s\"\n    document.body.classList.remove \\running\n\n\n*\u002F\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 