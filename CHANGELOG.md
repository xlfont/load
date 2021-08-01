# Change Logs

## v1.0.5

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
