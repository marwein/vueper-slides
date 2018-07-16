(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueperSlides = global.VueperSlides || {})));
}(this, (function (exports) { 'use strict';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = "";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var VueperSlide = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: { 'vueperslides__slide': true, 'vueperslides__slide--active': _vm.$parent.slides.activeUid === _vm._uid }, style: _vm.styles }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.$parent.conf.slideContentOutside && (_vm.title || _vm.hasTitleSlotData || _vm.content || _vm.hasContentSlotData), expression: "!$parent.conf.slideContentOutside && (title || hasTitleSlotData || content || hasContentSlotData)" }], staticClass: "vueperslides__slide-content" }, [_vm.title || _vm.hasTitleSlotData ? _c('div', { staticClass: "slide-title" }, [_vm._t("slideTitle"), _vm.title ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.title) } }) : _vm._e()], 2) : _vm._e(), _vm.content || _vm.hasContentSlotData ? _c('div', { staticClass: "slide-content" }, [_vm._t("slideContent"), _vm.content ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.content) } }) : _vm._e()], 2) : _vm._e()])]);
  }, staticRenderFns: [],
  props: {
    clone: {
      type: Number,
      default: null
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    if (this.hasTitleSlotData) this.$parent.updateSlideContent(this._uid, 'titleSlot', this.titleSlot);
    if (this.hasContentSlotData) this.$parent.updateSlideContent(this._uid, 'contentSlot', this.contentSlot);
  },
  created: function created() {
    this.$parent.addSlide({
      _uid: this._uid,
      image: this.image,
      title: this.title,
      content: this.content,
      clone: this.clone
    });
  },

  // When removing a slide programmatically, remove it from the config so vueperslides
  // component is aware of the change.
  destroyed: function destroyed() {
    if (this.clone === null) this.$parent.removeSlide(this._uid);
  },

  computed: {
    styles: function styles() {
      return _extends$1({}, this.image && { backgroundImage: 'url(' + this.image + ')' });
    },
    hasTitleSlotData: function hasTitleSlotData() {
      return this.$slots.slideTitle;
    },
    hasContentSlotData: function hasContentSlotData() {
      return this.$slots.slideContent;
    },
    titleSlot: function titleSlot() {
      return this.hasTitleSlotData ? this.$slots.slideTitle[0].elm.innerHTML : '';
    },
    contentSlot: function contentSlot() {
      return this.hasContentSlotData ? this.$slots.slideContent[0].elm.innerHTML : '';
    }
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".vueperslides { position: relative; } .vueperslides__inner { position: relative; user-select: none; } .vueperslides__parallax-wrapper { position: relative; overflow: hidden; } .vueperslides__track-wrapper { position: absolute; top: 0; height: 100%; left: 0; right: 0; overflow: hidden; z-index: 1; } .vueperslides--parallax .vueperslides__track-wrapper { height: 200%; transform: translateY(0); } .vueperslides--fade .vueperslides__track { white-space: normal; transition: none; } .vueperslides--touchable .vueperslides__track { cursor: ew-resize; cursor: -webkit-grab; cursor: grab; } .vueperslides--touchable .vueperslides__track--mousedown, .vueperslides--touchable .vueperslides__track--dragging { cursor: -webkit-grabbing; cursor: grabbing; } .vueperslides__track { white-space: nowrap; transition: 0.5s ease-in-out transform; height: 100%; } .vueperslides__track--mousedown { transition: 0.2s ease-in-out transform !important; } .vueperslides__track--dragging { transition: none; } .vueperslides__track--no-animation { transition-duration: 0s; } .vueperslides__slide { white-space: normal; background-position: top; background-size: cover; display: inline-block; width: 100%; height: 100%; position: relative; } .vueperslides__slide .vueperslides__slide-content { position: absolute; } .vueperslides--fade .vueperslides__slide { position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: .8s ease-in-out opacity; } .vueperslides--fade .vueperslides__slide--active { z-index: 1; opacity: 1; } .vueperslides__arrow { position: absolute; fill: currentColor; width: 1em; text-align: center; transform: translateY(-50%); transition: 0.3s ease-in-out; cursor: pointer; user-select: none; outline: none; z-index: 2; } .vueperslides__paused { position: absolute; transition: 0.3s ease-in-out; } .vueperslides__bullets { display: flex; justify-content: center; position: absolute; bottom: 0; left: 0; right: 0; } .vueperslides__bullets--outside { position: relative; } .vueperslides__bullet { cursor: pointer; user-select: none; outline: none; z-index: 2; display: flex; justify-content: center; align-items: center; } .vueperslides__bullet::-moz-focus-inner { border: 0; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var VueperSlides = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "vueperslides", staticClass: "vueperslides", class: { 'vueperslides--ready': _vm.isReady, 'vueperslides--fade': _vm.conf.fade, 'vueperslides--parallax': _vm.conf.parallax, 'vueperslides--touchable': _vm.touch.enabled && !_vm.disable, 'vueperslides--animated': true } }, [_vm.conf.slideContentOutside === 'top' ? _c('div', { staticClass: "vueperslides__slide-content vueperslides__slide-content--outside-top", class: _vm.conf.slideContentOutsideClass }, [_vm.slides.count && _vm.slides.list[_vm.slides.current].title ? _c('div', { staticClass: "slide-title", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].title) } }) : _vm._e(), _vm.slides.count && _vm.slides.list[_vm.slides.current].titleSlot ? _c('div', { staticClass: "slide-title", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].titleSlot) } }) : _vm._e(), _vm.slides.count && _vm.slides.list[_vm.slides.current].content ? _c('div', { staticClass: "slide-content", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].content) } }) : _vm._e(), _vm.slides.count && _vm.slides.list[_vm.slides.current].contentSlot ? _c('div', { staticClass: "slide-content", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].contentSlot) } }) : _vm._e()]) : _vm._e(), _c('div', { staticClass: "vueperslides__inner" }, [_c('div', { staticClass: "vueperslides__parallax-wrapper", style: 'padding-bottom:' + _vm.conf.slideRatio * 100 + '%' }, [_c('div', { staticClass: "vueperslides__track-wrapper", style: _vm.trackWrapperStyles }, [_c('div', { ref: "track", staticClass: "vueperslides__track", class: { 'vueperslides__track--dragging': _vm.touch.dragging, 'vueperslides__track--mousedown': _vm.mouseDown }, style: _vm.trackStyles }, [_vm.slides.count && _vm.clones[0] ? _c('vueper-slide', { staticClass: "vueperslides__slide--clone", style: _vm.clones[0].style, attrs: { "clone": 0, "title": _vm.clones[0].title, "content": _vm.clones[0].content, "image": _vm.clones[0].image } }, [_vm.clones[0].titleSlot ? _c('div', { attrs: { "slot": "slideTitle" }, domProps: { "innerHTML": _vm._s(_vm.clones[0].titleSlot) }, slot: "slideTitle" }) : _vm._e(), _vm.clones[0].contentSlot ? _c('div', { attrs: { "slot": "slideContent" }, domProps: { "innerHTML": _vm._s(_vm.clones[0].contentSlot) }, slot: "slideContent" }) : _vm._e()]) : _vm._e(), _vm._t("default", null, { currentSlide: _vm.slides.current }), _vm.slides.count && _vm.clones[1] ? _c('vueper-slide', { staticClass: "vueperslides__slide--clone", style: _vm.clones[1].style, attrs: { "clone": 1, "title": _vm.clones[1].title, "content": _vm.clones[1].content, "image": _vm.clones[1].image } }, [_vm.clones[1].titleSlot ? _c('div', { attrs: { "slot": "slideTitle" }, domProps: { "innerHTML": _vm._s(_vm.clones[1].titleSlot) }, slot: "slideTitle" }) : _vm._e(), _vm.clones[1].contentSlot ? _c('div', { attrs: { "slot": "slideContent" }, domProps: { "innerHTML": _vm._s(_vm.clones[1].contentSlot) }, slot: "slideContent" }) : _vm._e()]) : _vm._e()], 2)])]), _vm.$slots.pausedIcon ? _c('div', { staticClass: "vueperslides__paused" }, [_vm._t("pausedIcon")], 2) : _vm._e(), _vm.conf.arrows && _vm.slides.count > 1 && !_vm.disable ? _c('div', { staticClass: "vueperslides__arrows", class: { 'vueperslides__arrows--outside': _vm.conf.arrowsOutside } }, [_c('button', { directives: [{ name: "show", rawName: "v-show", value: !_vm.arrowPrevDisabled, expression: "!arrowPrevDisabled" }], staticClass: "vueperslides__arrow vueperslides__arrow--prev", on: { "click": function click($event) {
          _vm.onArrowClick(false);
        } } }, [_vm._t("arrowLeft", [_c('svg', { attrs: { "viewBox": "0 0 24 24" } }, [_c('path', { attrs: { "d": "M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z" } })])])], 2), _c('button', { directives: [{ name: "show", rawName: "v-show", value: !_vm.arrowNextDisabled, expression: "!arrowNextDisabled" }], staticClass: "vueperslides__arrow vueperslides__arrow--next", on: { "click": function click($event) {
          _vm.onArrowClick();
        } } }, [_vm._t("arrowRight", [_c('svg', { attrs: { "viewBox": "0 0 24 24" } }, [_c('path', { attrs: { "d": "M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z" } })])])], 2)]) : _vm._e(), _vm.conf.bullets && _vm.slides.count > 1 && !_vm.disable && !_vm.conf.bulletsOutside ? _c('div', { staticClass: "vueperslides__bullets" }, _vm._l(_vm.slides.list, function (item, i) {
      return _c('button', { key: i, ref: "bullet", refInFor: true, staticClass: "vueperslides__bullet", class: { 'vueperslides__bullet--active': _vm.slides.current === i }, on: { "click": function click($event) {
            _vm.goToSlide(i);
          }, "keyup": [function ($event) {
            if (!('button' in $event) && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
              return null;
            }if ('button' in $event && $event.button !== 0) {
              return null;
            }_vm.onArrowClick(false);
          }, function ($event) {
            if (!('button' in $event) && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
              return null;
            }if ('button' in $event && $event.button !== 2) {
              return null;
            }_vm.onArrowClick();
          }] } }, [_c('span', [_vm._v(_vm._s(i + 1))])]);
    })) : _vm._e()]), _vm.conf.bullets && _vm.slides.count > 1 && !_vm.disable && _vm.conf.bulletsOutside ? _c('div', { staticClass: "vueperslides__bullets vueperslides__bullets--outside" }, _vm._l(_vm.slides.list, function (item, i) {
      return _c('button', { key: i, ref: "bullet", refInFor: true, staticClass: "vueperslides__bullet", class: { 'vueperslides__bullet--active': _vm.slides.current === i }, on: { "click": function click($event) {
            _vm.goToSlide(i);
          }, "keyup": [function ($event) {
            if (!('button' in $event) && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
              return null;
            }if ('button' in $event && $event.button !== 0) {
              return null;
            }_vm.onArrowClick(false);
          }, function ($event) {
            if (!('button' in $event) && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
              return null;
            }if ('button' in $event && $event.button !== 2) {
              return null;
            }_vm.onArrowClick();
          }] } }, [_c('span', [_vm._v(_vm._s(i + 1))])]);
    })) : _vm._e(), _vm.conf.slideContentOutside === 'bottom' ? _c('div', { staticClass: "vueperslides__slide-content vueperslides__slide-content--outside-bottom", class: _vm.conf.slideContentOutsideClass }, [_vm.slides.count && _vm.slides.list[_vm.slides.current].title ? _c('div', { staticClass: "slide-title", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].title) } }) : _vm._e(), _vm.slides.count && _vm.slides.list[_vm.slides.current].titleSlot ? _c('div', { staticClass: "slide-title", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].titleSlot) } }) : _vm._e(), _vm.slides.count && _vm.slides.list[_vm.slides.current].content ? _c('div', { staticClass: "slide-content", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].content) } }) : _vm._e(), _vm.slides.count && _vm.slides.list[_vm.slides.current].contentSlot ? _c('div', { staticClass: "slide-content", domProps: { "innerHTML": _vm._s(_vm.slides.list[_vm.slides.current].contentSlot) } }) : _vm._e()]) : _vm._e()]);
  }, staticRenderFns: [],
  name: 'vueper-slides',
  components: { VueperSlide: VueperSlide },
  props: {
    initSlide: {
      type: Number,
      default: 1
    },
    slideRatio: {
      type: Number,
      default: 1 / 3
    },
    arrows: {
      type: Boolean,
      default: true
    },
    arrowsOutside: {
      type: Boolean,
      default: false
    },
    // Ability to disable arrows on slideshow edges. Only if not infinite mode.
    disableArrowsOnEdges: {
      type: [Boolean, String],
      default: false
    },
    bullets: {
      type: Boolean,
      default: true
    },
    bulletsOutside: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    slideContentOutside: {
      type: [Boolean, String],
      default: false
    },
    slideContentOutsideClass: {
      type: String,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    speed: {
      type: [Number, String],
      default: 4000
    },
    transitionSpeed: {
      type: [Number, String],
      default: 600
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    infinite: {
      type: Boolean,
      default: true
    },
    parallax: {
      type: [Boolean, Number],
      default: false
    },
    touchable: {
      type: Boolean,
      default: true
    },
    // By default when touch is enabled you have to drag from a slide side and pass 50% of slideshow width to change
    // slide. This setting changes this behavior to a horizontal pixel amount from anywhere on slideshow.
    draggingDistance: {
      type: Number,
      default: null
    },
    disable: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isReady: false,
      container: null,
      slides: { list: [], count: 0, activeUid: null, current: 0, clones: [] },
      clones: [],
      mouseDown: false,
      mouseOver: false,
      touch: { enabled: true, dragging: false, dragStartX: 0, dragAmount: 0, goNext: true },
      transition: { currentTranslation: 0, speed: 0 },
      timer: null,
      arrowPrevDisabled: false,
      arrowNextDisabled: false,
      breakpointsData: { list: [], current: null },
      parallaxData: { translation: 0, slideshowOffsetTop: null, isVisible: false }
    };
  },
  mounted: function mounted() {
    this.init();
  },

  methods: {
    init: function init() {
      var _this = this;

      this.emit('before-init', false);
      this.container = this.$refs.vueperslides;
      this.touch.enabled = this.conf.touchable;
      this.transition.speed = this.conf.transitionSpeed;

      if (Object.keys(this.breakpoints).length) {
        this.setBreakpointsList();
        this.setBreakpointConfig(this.getCurrentBreakpoint());
      }

      if (this.conf.infinite && !this.conf.fade) {
        this.cloneSlides();
        this.$nextTick(function () {
          return _this.cloneSlides();
        });
      }

      this.goToSlide(this.conf.initSlide - 1);
      this.bindEvents();

      this.isReady = true;
      this.emit('ready');
    },


    // Emit a named event outside the component with 2 possible parameters:
    // current slide info & next slide info.
    emit: function emit(name) {
      var includeCurrentSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var includeNextSlide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var args = [name];

      if (includeCurrentSlide || typeof includeNextSlide === 'number') {
        args[1] = {};
        if (includeCurrentSlide && this.slides.activeUid) {
          args[1].currentSlide = {
            index: this.slides.current,
            title: this.slides.list[this.slides.current].titleSlot ? this.slides.list[this.slides.current].titleSlot : this.slides.list[this.slides.current].title,
            content: this.slides.list[this.slides.current].contentSlot ? this.slides.list[this.slides.current].contentSlot : this.slides.list[this.slides.current].content
          };
        }
        if (typeof includeNextSlide === 'number') {
          var _getSlideInRange = this.getSlideInRange(includeNextSlide),
              nextSlide = _getSlideInRange.nextSlide;

          args[1].nextSlide = {
            index: nextSlide,
            title: this.slides.list[nextSlide].titleSlot ? this.slides.list[nextSlide].titleSlot : this.slides.list[nextSlide].title,
            content: this.slides.list[nextSlide].contentSlot ? this.slides.list[nextSlide].contentSlot : this.slides.list[nextSlide].content
          };
        }
      }

      this.$emit.apply(this, [name].concat(args));
    },
    setBreakpointsList: function setBreakpointsList() {
      this.breakpointsData.list = [99999].concat(_toConsumableArray(Object.keys(this.breakpoints))).sort(function (a, b) {
        return parseInt(a) < parseInt(b);
      });
    },
    getCurrentBreakpoint: function getCurrentBreakpoint() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var breakpoints = [windowWidth].concat(_toConsumableArray(this.breakpointsData.list)).sort(function (a, b) {
        return parseInt(a) < parseInt(b);
      });

      return this.breakpointsData.list[breakpoints.indexOf(windowWidth) - 1];
    },
    hasBreakpointChanged: function hasBreakpointChanged(breakpoint) {
      return this.breakpointsData.current !== breakpoint;
    },
    setBreakpointConfig: function setBreakpointConfig(breakpoint) {
      this.breakpointsData.current = breakpoint;
      // this.conf gets updated by itself when this.breakpointsData.current changes.
    },
    cloneSlides: function cloneSlides() {
      var firstNodeIsVnode = this.$slots.default[0].tag;
      var firstSlide = this.$slots.default[firstNodeIsVnode ? 0 : 1].elm;
      var lastSlide = this.$slots.default[this.$slots.default.length - 1].elm;

      this.clones[0] = {
        title: this.slides.list[this.slides.count - 1].title,
        titleSlot: this.slides.list[this.slides.count - 1].titleSlot || '',
        content: this.slides.list[this.slides.count - 1].content,
        contentSlot: this.slides.list[this.slides.count - 1].contentSlot || '',
        image: this.slides.list[this.slides.count - 1].image,
        style: lastSlide && lastSlide.attributes.style ? lastSlide.attributes.style.value : ''
      };
      this.clones[1] = {
        title: this.slides.list[0].title,
        titleSlot: this.slides.list[0].titleSlot || '',
        content: this.slides.list[0].content,
        contentSlot: this.slides.list[0].contentSlot || '',
        image: this.slides.list[0].image,
        style: firstSlide && firstSlide.attributes.style ? firstSlide.attributes.style.value : ''
      };
    },
    updateSlideContent: function updateSlideContent(slideUID, key, value) {
      this.slides.list.some(function (slide) {
        if (slide._uid === slideUID) {
          slide[key] = value;
        }

        return slide._uid === slideUID;
      });
    },
    bindEvents: function bindEvents() {
      var hasTouch = 'ontouchstart' in window;

      // Touch enabled slideshow.
      if (this.touch.enabled) {
        this.$refs.track.addEventListener(hasTouch ? 'touchstart' : 'mousedown', this.onMouseDown);
        document.addEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove);
        document.addEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
      }

      // Pause autoplay on mouseover.
      if (this.conf.pauseOnHover && !hasTouch && this.conf.autoplay) {
        this.container.addEventListener('mouseover', this.onMouseIn);
        this.container.addEventListener('mouseout', this.onMouseOut);
      }

      // Breakpoints or parallax need a resize event.
      if (this.breakpointsData.list.length || this.conf.parallax) {
        window.addEventListener('resize', this.onResize);
      }

      // Parallax slideshow.
      if (this.conf.parallax) {
        document.addEventListener('scroll', this.onScroll);
      }
    },


    // Recursively sum all the offsetTop values from current element up the tree until body.
    // By doing so a padding or margin on a parent won't cause a wrong calculation.
    getSlideshowOffsetTop: function getSlideshowOffsetTop() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.parallaxData.slideshowOffsetTop === null || force) {
        var el = this.container;
        var top = el.offsetTop;

        while (el = el.offsetParent) {
          top += el.offsetTop;
        }

        this.parallaxData.slideshowOffsetTop = top;
      }

      return this.parallaxData.slideshowOffsetTop;
    },
    onScroll: function onScroll(e) {
      var doc = document.documentElement;
      var scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var windowHeight = window.innerHeight || doc.clientHeight || document.body.clientHeight;
      var slideshowHeight = this.container.clientHeight;
      var slideshowTopOffset = this.getSlideshowOffsetTop();

      // The distance between the bottom line of the current vueperslides slideshow and top of window.
      // Negative value means the slideshow is totally above the current window box.
      var vsBottom2WinTop = slideshowTopOffset + slideshowHeight - scrollTop;
      // The distance between the top line of the current vueperslides slideshow and bottom of window.
      // Negative value means the slideshow is totally bellow the current window box.
      var vsTop2winBottom = windowHeight + scrollTop - slideshowTopOffset;

      this.parallaxData.isVisible = vsBottom2WinTop > 0 && vsTop2winBottom > 0;

      // Only apply translation when slideshow is visible.
      if (this.parallaxData.isVisible) {
        var heightToCoverWithTranslation = windowHeight + slideshowHeight;
        var percentage = vsBottom2WinTop * 100 / heightToCoverWithTranslation;
        var translatePercentage = this.conf.parallax === -1 ? 100 - percentage : percentage;
        this.parallaxData.translation = -translatePercentage / 2;
      }
    },
    onResize: function onResize() {
      if (this.breakpointsData.list.length) {
        var breakpoint = this.getCurrentBreakpoint();
        if (this.hasBreakpointChanged(breakpoint)) {
          this.setBreakpointConfig(breakpoint);
        }
      }

      if (this.conf.parallax) {
        // Only refresh parallaxData.slideshowOffsetTop value on resize for better performance.
        this.getSlideshowOffsetTop(true);
      }
    },
    onMouseIn: function onMouseIn() {
      this.mouseOver = true;

      if (this.conf.pauseOnHover && this.conf.autoplay) {
        this.clearTimer();
      }
    },
    onMouseOut: function onMouseOut() {
      this.mouseOver = false;

      if (this.conf.pauseOnHover && this.conf.autoplay) {
        this.setTimer();
      }
    },
    onMouseDown: function onMouseDown(e) {
      if (!this.touch.enabled || this.disable) return;
      if (!e.touches) e.preventDefault();

      // this.disableScroll()

      this.mouseDown = true;

      if (this.draggingDistance) {
        // Store drag start in var for distance calculation in onMouseUp().
        this.touch.dragStartX = 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;
      } else {
        var dragPercentage = this.getDragPercentage(e);

        // Set a flag for use while dragging in `onMouseMove` to know if drag was toward left or right.
        this.touch.goNext = dragPercentage >= 0.5;

        this.transition.currentTranslation = -100 * (this.slides.current + (this.touch.goNext ? 1 : 0) + (this.clones.length ? 1 : 0) - dragPercentage);
      }
    },
    onMouseMove: function onMouseMove(e) {
      if (this.mouseDown || this.touch.dragging) {
        this.mouseDown = false;
        this.touch.dragging = true;

        if (this.draggingDistance) {
          this.touch.dragAmount = this.getDragAmount(e);
          var dragAmountPercentage = this.touch.dragAmount / this.container.clientWidth;

          this.transition.currentTranslation = -100 * (this.slides.current + (this.clones.length ? 1 : 0) - dragAmountPercentage);
        } else {
          var dragPercentage = this.getDragPercentage(e);
          this.transition.currentTranslation = -100 * (this.slides.current + (this.touch.goNext ? 1 : 0) + (this.clones.length ? 1 : 0) - dragPercentage);
        }
      }
    },
    onMouseUp: function onMouseUp(e) {
      if (this.mouseDown || this.touch.dragging) {
        this.mouseDown = false;
        this.touch.dragging = false;

        var slideOnDragEnd = void 0;
        if (this.draggingDistance) {
          var dragAmount = this.touch.dragAmount;
          var dragAmountPercentage = dragAmount / this.container.clientWidth;

          slideOnDragEnd = this.slides.current;
          if (Math.abs(dragAmount) >= this.draggingDistance) {
            slideOnDragEnd += dragAmount > 0 ? -1 : 1;
          }
        } else {
          // When the drag is realeased, calculate if the drag ends before or after the 50%-slideshow-width threshold.
          // Then finish the sliding toward that slide.
          slideOnDragEnd = -(Math.round(this.transition.currentTranslation / 100) + (this.clones.length ? 1 : 0));
        }

        var _getSlideInRange2 = this.getSlideInRange(slideOnDragEnd),
            nextSlide = _getSlideInRange2.nextSlide;

        // If drag is not allowed (`arrowNextDisabled` = true) and dragging beyond last slide,
        // cancel sliding and snap back to last slide.


        if (this.arrowNextDisabled && this.conf.autoplay && nextSlide === 0) {
          nextSlide = this.slides.count - 1;
        }

        // Only call `goToSlide` if the drag ends on a slide that is different than the currentSlide.
        if (nextSlide !== this.slides.current) {
          this.goToSlide(slideOnDragEnd);
        } else {
          // Apply transition to snap back to current slide.
          this.transition.currentTranslation = -(this.slides.current + (this.clones.length ? 1 : 0)) * 100;
        }

        this.touch.dragStartX = null;
        this.touch.dragAmount = null;
        this.enableScroll();
      }
    },
    getDragPercentage: function getDragPercentage(e) {
      var dragStartX = 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;

      // For full window width slideshow only.
      // let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      // return dragStartX / windowWidth

      return (dragStartX - this.container.offsetLeft) / this.container.clientWidth;
    },


    /**
     * Return the x distance in pixel between drag start and current drag position.
     */
    getDragAmount: function getDragAmount(e) {
      return ('ontouchstart' in window ? e.touches[0].clientX : e.clientX) - this.touch.dragStartX;
    },
    disableScroll: function disableScroll() {
      document.ontouchmove = function (e) {
        e.preventDefault();
      };
    },
    enableScroll: function enableScroll() {
      document.ontouchmove = function () {
        return true;
      };
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
      this.timer = 0;
    },
    setTimer: function setTimer() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        _this2.goToSlide(_this2.slides.current + 1, true, true);
      }, this.conf.speed);
    },
    onArrowClick: function onArrowClick() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.goToSlide(this.slides.current + (next ? 1 : -1));
    },
    getSlideInRange: function getSlideInRange(i) {
      var clone = null;

      // If infinite enabled, going out of range takes the first slide from the other end.
      if (this.clones.length) {
        if (i < 0) {
          i = this.slides.count - 1;
          clone = 0;
        } else if (i > this.slides.count - 1) {
          i = 0;
          clone = 1;
        }
      }

      // If not infinite, can't go lower than 0 or beyond `slides.count` with `disableArrowsOnEdges`.
      // If `disableArrowsOnEdges` is enabled going out of range will take first slide from the other end
      // of the slideshow.
      else {
          if (i < 0) i = this.conf.disableArrowsOnEdges ? 0 : this.slides.count - 1;else if (i > this.slides.count - 1) {
            // If autoplay is on but disableArrowsOnEdges is enabled, going beyond the last one will also bring
            // the first one in.
            i = this.conf.disableArrowsOnEdges ? this.conf.autoplay ? 0 : this.slides.count - 1 : 0;
          }
        }

      return { nextSlide: i, clone: clone };
    },
    goToSlide: function goToSlide(i) {
      var _this3 = this;

      var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var autoSliding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!this.slides.count || this.disable) return;

      if (this.conf.autoplay) this.clearTimer();

      var _getSlideInRange3 = this.getSlideInRange(i),
          nextSlide = _getSlideInRange3.nextSlide,
          nextSlideIsClone = _getSlideInRange3.clone;

      // First use of `goToSlide` is while init, so should not propagate an event.


      if (this.isReady) this.emit('before-slide', true, nextSlide);

      // Disable arrows if `disableArrowsOnEdges` is on and there is no slide to go to on that end.
      if (this.conf.arrows && this.conf.disableArrowsOnEdges) {
        this.arrowPrevDisabled = nextSlide === 0;
        this.arrowNextDisabled = nextSlide === this.slides.count - 1;
      }

      // Infinite sliding with cloned slides:
      // When reaching last slide and going next the cloned slide of the first slide
      // shows up, when the animation ends the real change to the first slide is done
      // immediately with no animation.
      // Same principle when going beyond first slide.
      if (nextSlideIsClone !== null) {
        // Gives clone id (0 or 1 or null).
        setTimeout(function () {
          // inside the callback, also check if it is not too late to apply next slide
          // (user may have slid fast multiple times) if so cancel callback.
          var passedCloneBackward = i === -1 && _this3.slides.current !== _this3.slides.count - 1;
          var passedCloneForward = i === _this3.slides.count && _this3.slides.current !== 0;
          var tooLateToSetTimeout = passedCloneBackward || passedCloneForward;

          if (!tooLateToSetTimeout) {
            _this3.transition.speed = 0;
            _this3.goToSlide(nextSlideIsClone ? 0 : _this3.slides.count - 1, false, autoSliding);
            setTimeout(function () {
              _this3.transition.speed = _this3.conf.transitionSpeed;
            }, 10);
          }
        }, this.transition.speed - 50);
      }

      this.slides.current = nextSlide;

      // Only apply sliding transition when the slideshow animation type is `slide`.
      if (!this.conf.fade) {
        if (nextSlideIsClone !== null) {
          this.transition.currentTranslation = -100 * (nextSlideIsClone ? this.slides.count + 1 : 0);
        } else this.transition.currentTranslation = -100 * (this.slides.current + (this.clones.length ? 1 : 0));
      }

      this.slides.activeUid = this.slides.list[this.slides.current]._uid;

      if (this.conf.autoplay && !this.mouseOver) {
        this.setTimer();
      }

      if (this.slides.count) {
        if (this.$slots.default[this.slides.current]) {
          // First use of goToSlide is while init, so should not propagate an event.
          if (this.isReady) this.emit('slide');
        }

        if (this.isReady && !autoSliding && this.$refs.bullet[this.slides.current]) {
          this.$refs.bullet[this.slides.current].focus();
        }
      }
    },
    addSlide: function addSlide(newSlide) {
      var _this4 = this;

      var needReclone = this.conf.infinite && !this.conf.fade && this.isReady && newSlide.clone === null;

      if (newSlide.clone !== null) {
        this.clones[newSlide.clone] = newSlide;
      } else {
        // Add the slide in the slides array & update slides.count.
        this.slides.list.push(newSlide);
        this.slides.count = this.slides.list.length;
      }

      if (this.slides.count > 1 && this.touchable) {
        this.touch.enabled = true;
      }

      // cloneSlides() is called at the end of init so calling it before would be redundant.
      if (needReclone) {
        this.$nextTick(function () {
          return _this4.cloneSlides();
        });
      }
    },
    removeSlide: function removeSlide(uid) {
      var _this5 = this;

      var needReclone = false;

      this.slides.list.some(function (slide, i) {
        if (slide._uid === uid) {
          // Remove the slide.
          _this5.slides.list.splice(i, 1);
          _this5.slides.count = _this5.slides.list.length;

          // If the slide to remove is the current slide, slide to the previous slide.
          if (uid === _this5.slides.activeUid) {
            _this5.slides.activeUid = null;
            _this5.goToSlide(i - 1, true, true);
          }

          if (_this5.slides.count <= 1) {
            _this5.touch.enabled = false;
          }

          if (_this5.clones.length && _this5.isReady && !slide.clone) needReclone = true;

          return true; // Break the `Array.some` loop.
        }
      });

      if (this.slides.count && needReclone) {
        this.cloneSlides();
      }
    }
  },

  computed: {
    // this.conf needs to be reactive so user can change a Vueper Slides option and everything gets updated.
    conf: function conf() {
      // Read config from the props then check if breakpoints are defined. If so override the config with
      // the breakpoint ones.
      return _extends({}, this.$props, this.$props.breakpoints && this.$props.breakpoints[this.breakpointsData.current] || {});
    },
    trackStyles: function trackStyles() {
      var styles = {};

      styles.transitionDuration = this.transition.speed + 'ms';

      if (!this.conf.fade) {
        styles.transform = 'translateX(' + this.transition.currentTranslation + '%)';
      }

      return styles;
    },
    trackWrapperStyles: function trackWrapperStyles() {
      var styles = {};

      if (this.conf.parallax) {
        styles.transform = 'translateY(' + this.parallaxData.translation + '%)';

        // Increase browser optimizations by allocating more machine resource.
        // ! \\ To be used wisely so deactivate when not needed.
        styles.willChange = this.parallaxData.isVisible ? 'transform' : 'auto';
      }

      return styles;
    }
  }
};

// Expose component to global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vueper-slides', VueperSlides);
  window.Vue.component('vueper-slide', VueperSlide);
}

exports.VueperSlides = VueperSlides;
exports.VueperSlide = VueperSlide;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vueperslides.js.map
