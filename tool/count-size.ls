require! <[fs @plotdb/opentype.js]>
ranges = JSON.parse(fs.read-file-sync 'tool/data/unicode-ranges.json' .toString!)
rhash = {}
opentype.load '../fonts/jf-open-huninn/src/openhuninn-1.1.ttf', (e, font) ->
  ret = font.getPath 'H', 0, 0, 64
  set = new Set!
  for i from 0 til font.glyphs.length =>
    g = font.glyphs.glyphs[i]
    set.add g.unicode
    (g.unicodes or []).map -> set.add it
  list = Array.from(set).filter -> it
  sum = 0
  list.map (code) ->
    ret = font.getPath String.fromCharCode code, 0, 0, 64
    len = ret.toPathData!
    m = ranges.filter((r) -> code >= r.0 and code <= r.1).0
    if !rhash[m.2] => rhash[m.2] = {p: 0, len: 0, count: 0}
    rhash[m.2].len += len.length
    rhash[m.2].p += len.split(/[A-Z]/).length
    rhash[m.2].count += 1
  for k,v of rhash =>
    len = (v.len / v.count).toFixed(2)
    p = (v.p / v.count).toFixed(2)
    pp = v.p / v.count
    v <<< {len,p,pp}

  list = [{k,v} for k,v of rhash]
  list.sort (a,b) -> +(b.v.pp) - +(a.v.pp)
  for i from 0 til list.length =>
    {k,v} = list[i]
    {len,p,count} = v
    pp = (v.pp).toFixed
    #console.log "#{k.padStart 35} | len: #{('' + len).padStart(10)} | point: #{('' + p).padStart(3)}"
    console.log "#{k}\t#{('' + len)}\t#{('' + p)}\t#{('' + count)}"

    
