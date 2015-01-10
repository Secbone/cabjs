(function() {
  var Bonejs, Obj,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Bonejs = (function() {
    function Bonejs(selector, size) {
      this.runKeyframes = __bind(this.runKeyframes, this);
      this._autoResize = __bind(this._autoResize, this);
      this.children = [];
      this.Object = new Obj();
      selector = selector || 'canvas';
      size = size || [1, 1];
      this._canvas = document.querySelector(selector);
      this._parent = this._canvas.parentNode;
      this._painter = this._canvas.getContext('2d');
      this.setSize(size);
      this._bindEvent();
    }

    Bonejs.prototype.getWebgl = function() {
      this._gl = null;
      return this._gl = this._canvas.getContext('webgl');
    };

    Bonejs.prototype.start = function() {
      return requestAnimationFrame(this.runKeyframes);
    };

    Bonejs.prototype.setBackground = function(color) {
      this._background = color;
      return this._clear();
    };

    Bonejs.prototype.setSize = function(size) {
      this.setWidth(size[0]);
      return this.setHeight(size[1]);
    };

    Bonejs.prototype.setWidth = function(width) {
      var canvasWidth;
      this._width = width;
      canvasWidth = width > 1 ? width : this._canvas.parentNode.offsetWidth * width;
      return this._canvas.setAttribute("width", canvasWidth);
    };

    Bonejs.prototype.setHeight = function(height) {
      var canvasHeight;
      this._height = height;
      canvasHeight = height > 1 ? height : this._canvas.parentNode.offsetHeight * height;
      return this._canvas.setAttribute("height", canvasHeight);
    };

    Bonejs.prototype.getWidth = function() {
      return this._canvas.offsetWidth;
    };

    Bonejs.prototype.getHeight = function() {
      return this._canvas.offsetHeight;
    };

    Bonejs.prototype._autoResize = function() {
      return this.setSize([this._width, this._height]);
    };

    Bonejs.prototype._bindEvent = function() {
      return window.addEventListener('resize', this._autoResize);
    };

    Bonejs.prototype._clear = function() {
      return this.fillRect([0, 0, this.getWidth(), this.getHeight()], this._background);
    };

    Bonejs.prototype.fillRect = function(rectArray, color) {
      var _ref;
      this._painter.fillStyle = color;
      return (_ref = this._painter).fillRect.apply(_ref, rectArray);
    };

    Bonejs.prototype.append = function(obj) {
      return this.children.push(obj);
    };

    Bonejs.prototype.runKeyframes = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        console.log(child);
        _results.push(child.keyframe());
      }
      return _results;
    };

    return Bonejs;

  })();

  Obj = (function() {
    Obj.prototype.properties = {
      height: 'auto',
      width: 'auto'
    };

    function Obj(options) {}

    Obj.prototype._setProperties = function() {
      var property, value, _i, _len, _ref, _results;
      _ref = this.options;
      _results = [];
      for (value = _i = 0, _len = _ref.length; _i < _len; value = ++_i) {
        property = _ref[value];
        _results.push(console.log(property));
      }
      return _results;
    };

    Obj.prototype.extend = function(options) {
      var key, value, _i, _len;
      for (key = _i = 0, _len = options.length; _i < _len; key = ++_i) {
        value = options[key];
        this[key] = value;
      }
      return this;
    };

    Obj.prototype.keyframe = function() {};

    return Obj;

  })();

  window.$bone = Bonejs;

}).call(this);
