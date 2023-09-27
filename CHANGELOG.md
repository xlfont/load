# Change Logs

## v2.1.3

 - remove the 350ms delay at the end of `xfl.update`


## v2.1.2

 - fix bug: `_fetch` should resolve proxise function `proxy`, otherwise proxised caller will wait indefinitely


## v2.1.1

 - fix bug: `opentype.load` in  `getotf` should be proxisized, otherwise flood of requests will be made


## v2.1.0

 - fix bug: format of css generation in fetch is not correct
 - export xlfont class


## v2.0.2

 - fix bug: default value for input dir and `output` directory should be `font` and `output`.
 - remove `dist` folder since it's flatten in root dir


## v2.0.1

 - publish module with files under `dist` in root too.


## v2.0.0

 - remove deprecated `xfl.js` and `xfl.min.js`
 - further minimize generated js file with mangling and compression
 - update `main`, add `browser` field in `package.json`.
 - upgrade modules
 - patch test code to make it work with upgraded modules
 - fix bug: opentype-url doesn't work
 - use Object URL for worker loading so we don't have to specify its path by ourselves


## v1.1.1

 - correctly support web worker by accepting options for worker and dependency url


## v1.1.0

 - support merging font locally by opentype.js
 - support web worker ( TBD )
 - suppoty `style` and `weight` information
 - wait explicitly until fonts loaded according to document.fonts in `xfl.update`
 - accept `use-worker` as an option, but still dont enable it
 - normalize font name if it's derived from url
 - load xlfont with woff instead of ttf.
 - support `hasChar(c)`
 - support `getPath(opt)` as xlfont method, which check chars for availability before rendering.
 - let misschar also keep tracks of supported char (by setting it to false)


## v1.0.13

 - null check sub.font[0] before using it
 - support string param in `load` api
 - point entry point from `xfl.js` to `index.js`


## v1.0.12

 - add back proxise since we can't actually remove it for now


## v1.0.11

 - remove dependency to proxise by inlining `once` function
 - rename `xfl.js` while keeping `index.js`, which will be removed in future minor update
 - rename `xfont` to `xlfont` to reflect package name.


## v1.0.10

 - escape space in class name
 - quote name in font family name that didn't quote in the last version


## v1.0.9

 - escape space in font name
 - quote name and url in font family styles
 - call update for non-xl fonts
 - fix incorrectly assignment in xfl.update


## v1.0.8

 - fix bug: `-a` option doesn't work in `xfl-meta`


## v1.0.7

 - fix incorrect versioning issue


## v1.0.5 / v1.0.6

 - skip notdef by reference instead of by name. This fixed `Taipei Sans TC Beta` generation issue.


## v1.0.4

 - handle newlines in metadata


## v1.0.3

 - support subsetting only single font in xfl command
 - better formatting of xfl-meta output


## v1.0.2

 - add `xfl-meta` command
 - add missing dependency in `build.js`
 - update `package.json` for some dependencies that should be for production


## v1.0.1

 - remove npm-shrinkwrap.json


## v1.0.0

 - completely rewrite xfl.ls
 - support font merging based on opentype.js
 - non-xl-font aware
 - better support for concurrent fetching
 - support promise in all api
 - use SIL-Open Licensed fonts only for demonstration
 - remove fontmin / gulp-rename dependency
 - add `woff` format output
 - use `@plotdb/opentype.js` for bug fixing
