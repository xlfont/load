#!/usr/bin/env node
(function(){
  var fs, path, yargs, opentype, lib, allRanges, argv, file, all;
  fs = require('fs');
  path = require('path');
  yargs = require('yargs');
  opentype = require('@plotdb/opentype.js');
  lib = path.dirname(fs.realpathSync(__filename));
  allRanges = JSON.parse(fs.readFileSync(path.join(lib, '..', 'tool', 'data', 'unicode-ranges.json')).toString());
  argv = yargs.usage("usage: npx xfl-meta path-to-font-file").option('all', {
    alias: 'a',
    description: "show all covered ranges",
    type: 'string'
  }).help('help').alias('help', 'h').check(function(argv, options){
    if (!argv._[0]) {
      throw new Error("missing font dir");
    }
    return true;
  }).argv;
  file = argv._[0];
  all = argv.a;
  opentype.load(file).then(function(it){
    var unicodes, k, ref$, v, ranges, rangeSize, rangeCodes, res$, len, i$, i, range;
    unicodes = [];
    for (k in ref$ = it.names || {}) {
      v = ref$[k];
      console.log((k + ": ").padStart(18), v);
    }
    for (k in ref$ = it.glyphs.glyphs) {
      v = ref$[k];
      unicodes = unicodes.concat(v.unicodes, [v.unicode]);
    }
    unicodes = Array.from(new Set(unicodes.filter(function(it){
      return it;
    })));
    ranges = {};
    rangeSize = {};
    allRanges.map(function(it){
      return rangeSize[it[2]] = it[1] - it[0];
    });
    unicodes.map(function(u){
      return allRanges.filter(function(r){
        return u >= r[0] && u <= r[1];
      }).map(function(it){
        var key$;
        return (ranges[key$ = it[2]] || (ranges[key$] = [])).push(u);
      });
    });
    for (k in ranges) {
      v = ranges[k];
      ranges[k] = v.length;
    }
    res$ = [];
    for (k in ranges) {
      v = ranges[k];
      res$.push([k, v, (100 * v / (rangeSize[k] || 1)).toFixed(2)]);
    }
    rangeCodes = res$;
    rangeCodes.sort(function(a, b){
      return b[1] - a[1];
    });
    console.log("total glyphs: ".padStart(18), it.glyphs.length);
    console.log("covered unicode: ".padStart(18), unicodes.length);
    console.log("covered ranges: ".padStart(18), rangeCodes.length, ", with following:");
    len = all
      ? rangeCodes.length
      : Math.min(rangeCodes.length, 5);
    for (i$ = 0; i$ < len; ++i$) {
      i = i$;
      range = rangeCodes[i];
      console.log(("   - " + range[0] + ": ").padEnd(47), (range[1] + "").padStart(5), "(", (range[2] + "%)").padStart(7));
    }
    if (len < rangeCodes.length) {
      return console.log("     ( " + rangeCodes.length + " other ranges omitted. )");
    }
  });
}).call(this);
