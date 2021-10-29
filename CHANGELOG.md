# Change Logs

## v1.0.14 (upcoming)

 - support merging font locally by opentype.js
 - support web worker ( TBD )
 - suppoty `style` and `weight` information


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
