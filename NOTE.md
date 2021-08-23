## License

For all original font file(s), license file can be found under corresponding source font folder.
In `dist` is the subsetting of the origin font(s). For license consideration about subsetting, see below.


## Font Subsetting Consideration

According to *[SIL's OFL FAQ](https://scripts.sil.org/cms/scripts/page.php?item_id=OFL-FAQ_web#b4b7db21)* and *[Web Fonts and Reserved Font Names](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web_fonts_and_RFNs#33301a9c)*, Subsetting a font is considered *modification* of that font. This is permitted by *Open Font License (OFL)*, but OFL requires that modified versions must not use RFNs (Reserved Font Names) without separate permission.

However, once FE (Functional Equivalence) is preserved, then it's very likely that the original author would feel that the optimized font is a good and reasonable equivalent, and that the main purposes of the RFN mechanism - avoids collisions, protects authors. minimizes support, encourages derivatives - continue to be met.

An optimized font is considered FE if:

 1. Supports the same full character inventory
 2. Provides the same smart font behavior
 3. Presents text with no obvious degradation in visual quality
 4. Preserves original author, project and license metadata

Subsetting is [discussed separated](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web_fonts_and_RFNs#b4599c52) and only `Dynamic Subsetting` and `Dynamic Subsetting with Progressive Client Storage` is considered as possibly FE preserved.

With `@xlfont/load` serving the subsetted font it can possibly be considered `Dynamic Subsetting`, however the subsetted font alone definitely will be in the `pre-subsetting` category.
