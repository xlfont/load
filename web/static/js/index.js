var base, editor;
base = 'https://plotdb.github.io/xl-fontset/alpha';
base = '/assets/fonts';
base = 'https://xlfont.maketext.io/links';
editor = {
  init: function(){
    var this$ = this;
    this.ldcv = new ldcover({
      root: document.querySelector('.ldcv')
    });
    this.ldld = new ldloader({
      root: document.querySelector('.ldcv .inner .ld')
    });
    this.gldcv = new ldcover({
      root: ld$.find('#gloader', 0)
    });
    this.gld = new ldloader({
      root: ld$.find('#gloader', 0),
      toggler: function(v){
        return this$.gldcv.toggle(v);
      }
    });
    this.svg = document.querySelector('svg');
    this.path = document.querySelector('path');
    this.textarea = document.querySelector('textarea');
    this.textarea.addEventListener('keyup', function(){
      return this$.sync();
    });
    document.querySelector('#chooser').addEventListener('click', function(e){
      var target, p, ref$, font, type, weight;
      if (!e || !e.target) {
        return;
      }
      target = e.target.getAttribute('data-target');
      if (target === 'svg') {
        return this$.toSvg();
      }
      p = ld$.parent(e.target, '[data-font]', document.querySelector('#chooser'));
      if (!p) {
        return;
      }
      ref$ = ['data-font', 'data-type', 'data-weight'].map(function(it){
        return p.getAttribute(it);
      }), font = ref$[0], type = ref$[1], weight = ref$[2];
      if (!font) {
        return;
      }
      this$.gld.on();
      return debounce(350).then(function(){
        if (type !== 'en') {
          return this$.load(font, weight);
        }
        return xfl.load({
          path: base + "/" + font + "/normal/" + weight + ".ttf",
          weight: weight,
          style: 'normal'
        }).then(function(it){
          this$.font = it;
          return this$.sync();
        });
      }).then(function(){
        console.log('loaded');
        return this$.gld.off();
      });
    });
    this.gld.on();
    return debounce(350).then(function(){
      var promiseBody, promiseHead;
      promiseBody = this$.load('Klee One');
      promiseHead = xfl.load({
        path: base + "/SoukouMincho/normal/400"
      }).then(function(font){
        var headlines, texts;
        headlines = Array.from(document.querySelectorAll('h1,h2,h3'));
        texts = headlines.map(function(it){
          return it.innerText;
        }).join('');
        return font.sync(texts).then(function(){
          return headlines.map(function(it){
            return it.classList.add(font.className);
          });
        });
      });
      return Promise.all([promiseHead, promiseBody]);
    }).then(function(){
      console.log('inited.');
      return this$.gld.off();
    });
  },
  toSvg: function(){
    var this$ = this;
    return this.ldld.on().then(function(){
      return this$.ldcv.toggle();
    }).then(function(){
      return this$.font.getPath({
        text: this$.textarea.value.replace('s/g', ' '),
        x: 0,
        y: 0,
        fontSize: 48
      });
    }).then(function(path){
      var box, d, rbox, x, y;
      box = path.getBoundingBox();
      d = path.toPathData();
      rbox = this$.svg.getBoundingClientRect();
      x = rbox.width / 2 - (box.x2 - box.x1) / 2 - box.x1;
      y = rbox.height / 2 - (box.y2 - box.y1) / 2 - box.y1;
      this$.path.setAttribute('d', d);
      return this$.path.setAttribute('transform', "translate(" + x + ", " + y + ")");
    }).then(function(){
      return this$.ldld.off();
    });
  },
  load: function(font, weight, style){
    var this$ = this;
    weight == null && (weight = 400);
    style == null && (style = 'normal');
    return xfl.load({
      path: base + "/" + font + "/" + style + "/" + weight,
      weight: weight,
      style: style,
      doMerge: true
    }).then(function(font){
      this$.font = font;
      return this$.font.sync(document.body.innerText);
    }).then(function(){
      return this$.sync();
    });
  },
  sync: function(){
    if (!this.font) {
      return;
    }
    this.font.sync(this.textarea.value);
    this.textarea.setAttribute('class', "form-control " + this.font.className);
    return document.body.setAttribute('class', this.font.className + "");
  }
};
editor.init();