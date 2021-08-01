require! <[fs path yargs @plotdb/opentype.js]>

lib = path.dirname fs.realpathSync __filename
all-ranges = JSON.parse( fs.read-file-sync path.join(lib, '..', 'tool', 'data', 'unicode-ranges.json') .toString! )
argv = yargs
  .usage "usage: npx xfl-meta path-to-font-file"
  .option \all, do
    alias: \a
    description: "show all covered ranges"
    type: \string
  .help \help
  .alias \help, \h
  .check (argv, options) ->
    if !argv._.0 => throw new Error("missing font dir")
    return true
  .argv

file = argv._.0
all = argv.a

opentype.load file
  .then ->
    unicodes = []
    for k,v of (it.names or {}) => console.log "#k: ".padStart(18), v
    for k,v of it.glyphs.glyphs => unicodes = unicodes ++ v.unicodes ++ [v.unicode]
    unicodes = Array.from(new Set(unicodes.filter -> it))
    ranges = {}
    range-size = {}
    all-ranges.map -> range-size[it.2] = it.1 - it.0
    unicodes.map (u) ->
      all-ranges
        .filter (r) -> u >= r.0 and u <= r.1
        .map -> ranges[][it.2].push u
    for k,v of ranges => ranges[k] = v.length
    range-codes = [[k,v,(100 * v / (range-size[k] or 1)).toFixed(2)] for k,v of ranges]
    range-codes.sort (a,b) -> b.1 - a.1
    console.log "total glyphs: ".padStart(18), it.glyphs.length
    console.log "covered unicode: ".padStart(18), unicodes.length
    console.log "covered ranges: ".padStart(18), range-codes.length, ", with following:"
    len = if all => range-codes.length else Math.min(range-codes.length, 5)
    for i from 0 til len =>
      range = range-codes[i]
      console.log "   - #{range.0}: ".padEnd(47), "#{range.1}".padStart(5), "(", "#{range.2}%)".padStart(7)
    if len < range-codes.length => console.log "     ( #{range-codes.length} other ranges omitted. )"

