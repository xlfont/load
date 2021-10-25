# @xlfont/load

`X`L-`F`ont `L`oader - Subset font loader / generator, mainly for supporting fonts with big file sizes, such as CJK fonts. Features:

 - word frequency based font subsetting
 - partial / lazy loading of subsetted fonts based on glyphs used
 - no backend dependency ( static font subsetting )
   - still possible to be extended to support dynamic font subsetting.


## Installation

This is a javascript project based on nodeJS / npm. After installing node / npm, install with following:

    npm install --save @xlfont/load


## xl-font subsetting generator

use `npx xfl` to subset fonts with `xfl`:

    npx xfl font-dir [-f word-frequency-csv] [-o output-dir] [-c major-subset-size] [-s subset-size]


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


## xl-font subset loader

include the locally installed dist files or from cdn:

    <script src="path-to/xfl.js"></script>


Then, load desired font:

    xfl.load({path: "path-to-subset-font-folder"}).then(function(font) {
        ...
    });

Sync font based on given text:

    xfl.load({path: "path-to-subset-font-folder"}).then(function(font) {
        font.sync("含有這些字的字型子集會被載入。Subset containgin glyphs from these chars will be loaded.");
    });



Font object API:

 - `init()`: init this font object. `xfl.load` will do this job for you.
 - `sync(text)`: load fonts based on given text.
 - `getotf()`: return a promise, resolved to `opentype.Font` from `opentype.js`.
   - `opentype.js` is required for this method
   - `fetchAll()` will be called by this method.
 - `fetchAll()`: by default `xfl` use CSS to load fonts. `fecthAll()` fetch all subset fonts with JS again.
 - `name`: font name which can be used in CSS `font-family` property.
 - `className`: a CSS class name which its `font-family` is assigned to this font.


## availabel xl-fonts

While this is a tool for composing and using xl-font, we also prepare a set of xl-fonts so you can use them directly with `xfl.js`. All fonts are released under `SIL-Open Font License 1.1` or similar open licenses. Checkout the following repo for more information:

    https://github.com/xlfont/cjk/



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

According to *[SIL's OFL FAQ](https://scripts.sil.org/cms/scripts/page.php?item_id=OFL-FAQ_web#b4b7db21)* and *[Web Fonts and Reserved Font Names](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web_fonts_and_RFNs#33301a9c)*, Subsetting a font is considered *modification* of that font. This is permitted by *Open Font License (OFL)*, but OFL requires that modified versions must not use RFNs (Reserved Font Names) without separate permission.

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
