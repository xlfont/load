# @xlfont/load

`X`L-`F`ont `L`oader - Subset font loader / generator, mainly for supporting fonts with big file sizes, such as CJK fonts. Features:

 - word frequency based font subsetting
 - partial / lazy loading of subsetted fonts based on glyphs used
 - no backend dependency ( static font subsetting )
   - still possible to be extended to support dynamic font subsetting.


## Installation

This is a javascript project based on nodeJS / npm. After installing node / npm, install with following:

    npm install --save @xlfont/load


## xlfont subsetting generator

use `npx xfl` to subset fonts with `xfl`:

    npx xfl font-dir [o output-dir] [-f word-frequency-csv] [-c major-subset-size] [-s subset-size]


where:

 - `font-dir`: root dir containing your font files.
   - `xfl` lists all font files under `font-dir`, and subset them into `output-dir`.
   - support font format:
     - ttf ( truetype )
     - otf ( opentype )
 - `output-dir`: dir to put subsetted fonts, in subfolders named after the corresponding font files.
 - `word-frequency-csv`: desired word frequency information, in `csv` format.
   - use sample csv ( `tool/data/word-frequency.csv` ) if omitted.
   - sample csv is for tranditional Chinese, derived from [moe.gov.tw](http://language.moe.gov.tw/001/Upload/files/SITE_CONTENT/M0001/86NEWS/download/86rest17.TXT)
 - `major-subset-size`: how many glyphs to put in the major subset. default 1500 if omitted.
 - `subset-size`: how many glyphs to put in other subsets. default 100 if omitted.

Additionally, if you encountered errors about `Out Of Memory`, you can add change nodeJS config by setting following environment variable:

    export NODE_OPTIONS=--max_old_space_size=4096


Generally speaking, the steps of font subsetting by `xfl` are as following:

 - join all unicodes from glyphs available in fonts and the codes listed in word frequency files
 - sort above unicode list based on word frequency information.
 - create the major subset ( 1.ttf ), containing `major-subset-size` glyphs.
   - punctuation ( 0xff00 ~ 0xffef )
   - ascii characters ( 0x00 ~ 0xff )
   - the most commonly used codes, by word frequency information.
 - create subsets based on the remaining codes, each contains `subset-size` glyphs.
 - font subsets are named after set index, start from 1. Includes ttf, woff and woff2 format.
 - dump unicode / subset mapping to `charmap.txt`. also keep the original font as `all.ttf`.


## xlfont subset loader

include the locally installed dist files or from cdn:

    <script src="path-to/xfl-js"></script>


Then, load desired font:

    xfl.load({path: "path-to-subset-font-folder"}).then(function(font) {
        ...
    });

Sync font based on given text:

    xfl.load({path: "path-to-subset-font-folder"}).then(function(font) {
        font.sync("含有這些字的字型子集會被載入。Subset containgin glyphs from these chars will be loaded.");
    });

Use `font.className` for font related CSS rules:

    xfl
      .load( ... )
      .then(function(font) { 
        font.sync( ... ).then(function() { document.body.classList.add(font.className); });
      })


## xfl API

 - `load(opt)`: load specified font. cache used fonts to save bandwidth and memory.
   - `opt` can either be:
     - a string to the specified font, or object as option
     - an object passed directly to `xlfont` constructor.
   - return a promise resolving to a `xlfont` object.
 - `update()`: refresh necessary CSS in document to reflect font status changes.


## xlfont Constructor

Besides loading from `xfl.load`, you can also manually construct a `xlfont` object. `xlfont` is the interface to accessing specific font ( including normal font or subsetted xlfont ), with constructor options as below:

 - `path`: path to font.
 - `ext`: optional. font file extension ( `ttf`, `woff`, etc )
   - if omitted, calculated from `path`.
   - if not available ( either in `ext` or `path` ), default to `woff` and consider this font as a xlfont.
 - `name`: font name. if omitted, use normalized `path` as font name.
 - `isXl`: true if this is a xlfont. if omitted, decided by `ext`. 
 - `doMerge`: should subsetted merged by frontend JS before using to enhacen UX. default false
 - `useWorker`: use web worker for font merging. default false. When specified, can be an object with following:
   - `opentype-url`: required `opentype.js` url.
      - context of worker is in Object URL, so relative URL is not support.
      - use `document.location` to prevent from hardcoding domain.
 - `style`: font style ( e.g., `normal`, `italic` ). default `normal`.
 - `weight`: font weight ( e.g., `400`, `500`, etc ). default `400`.


## xlfont Object API

 - `init()`: init this font object. `xfl.load` will do this job for you.
 - `sync(text)`: load fonts based on given text.
   - return a Promise. this will also call `update`
 - `getotf()`: return a promise, resolved to `opentype.Font` from `opentype.js`.
   - `opentype.js` is required for this method
   - `fetchAll()` will be called by this method.
 - `getPath(opt)`: return a promise resolving to opentype.js' `Path` object based on opt with following fields:
   - `text`: text to render. default ''
   - `x`: x offset of the rendered text. default 0
   - `y`: y offset of the rendered text. default 0
   - `fontSize`: size of the rendered text. default 48
 - `hasChar(c)`: return if code point of the given character `c` is available in this font.
   - return true / false: available or not available
   - return undefined: not sure before synced
 - `fetchAll()`: by default `xfl` use CSS to load fonts. `fecthAll()` fetch all subset fonts with JS again.
 - `name`: font name which can be used in CSS `font-family` property.
 - `className`: a CSS class name which its `font-family` is assigned to this font.


## availabel xlfonts

While this is a tool for composing and using xlfont, we also prepare a set of xlfonts so you can use them directly with `xfl.js`. All fonts are released under `SIL-Open Font License 1.1` or similar open licenses. Checkout repo list of the Github organization of `@xlfont` for more information:

    https://github.com/xlfont/


## Todo

 - optimization
   - consider glyphs relationship by moedict + clustering to reduce cache miss rate.
   - font minification in advance, if possible
   - support single request for multiple subset
   - dynamic font subsettings
 - quality
   - fill missing glyphs by GAN.
   - make more SIL-Open licensed fonts?

## Resources

 - Google Font also use similar technologies to load chinese font. see:
   - https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization
   - sample CSS: https://fonts.googleapis.com/css?family=Zhi-Mang-Xing&display=swap
 - `unicode-ranges.json`
   - parsed from content of `https://www.ling.upenn.edu/courses/Spring_2003/ling538/UnicodeRanges.html`
   - content of the above link is from `http://www.unicode.org/charts/`


## Font Subsetting Consideration

According to [*SIL's OFL FAQ*](https://scripts.sil.org/cms/scripts/page.php?item_id=OFL-FAQ_web#b4b7db21) and [*Web Fonts and Reserved Font Names*](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web_fonts_and_RFNs#33301a9c), Subsetting a font is considered *modification* of that font. This is permitted by *Open Font License (OFL)*, but OFL requires that modified versions must not use RFNs (Reserved Font Names) without separate permission.

However, once FE (Functional Equivalence) is preserved, then it's very likely that the original author would feel that the optimized font is a good and reasonable equivalent, and that the main purposes of the RFN mechanism - avoids collisions, protects authors. minimizes support, encourages derivatives - continue to be met.

An optimized font is considered FE if:

 - Supports the same full character inventory
 - Provides the same smart font behavior
 - Presents text with no obvious degradation in visual quality
 - Preserves original author, project and license metadata

Subsetting is [discussed separated](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web_fonts_and_RFNs#b4599c52) and only `Dynamic Subsetting` and `Dynamic Subsetting with Progressive Client Storage` is considered as possibly FE preserved.

With `@xlfont/load` serving the subsetted font it can possibly be considered `Dynamic Subsetting`, however the subsetted font alone definitely will be in the `pre-subsetting` category.


## LICENSE

MIT License.
