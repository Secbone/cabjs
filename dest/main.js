(function() {
  var Bonejs, Obj, extend,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bonejs = (function() {
    function Bonejs(selector, size) {
      this.runKeyframes = __bind(this.runKeyframes, this);
      this._autoResize = __bind(this._autoResize, this);
      this.children = [];
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

    Bonejs.prototype.draw = function() {};

    Bonejs.prototype.fillRect = function(rectArray, color) {
      var _ref;
      this._painter.fillStyle = color;
      return (_ref = this._painter).fillRect.apply(_ref, rectArray);
    };

    Bonejs.prototype.append = function(obj) {
      obj._setCanvas(this);
      return this.children.push(obj);
    };

    Bonejs.prototype.runKeyframes = function() {
      var child, _i, _len, _ref, _results;
      this._clear();
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        child.keyframe();
        _results.push(requestAnimationFrame(this.runKeyframes));
      }
      return _results;
    };

    return Bonejs;

  })();

  extend = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      this[key] = value;
    }
    return this;
  };

  Obj = (function() {
    function Obj(options) {
      var _ref, _ref1;
      options || (options = {});
      this.x = (_ref = options.x) != null ? _ref : 0;
      this.y = (_ref1 = options.y) != null ? _ref1 : 0;
      this.initialize.apply(this, arguments);
    }

    Obj.prototype._setPainter = function(painter) {
      return this.painter = painter;
    };

    Obj.prototype._setCanvas = function(parent) {
      return this._parent = parent;
    };

    return Obj;

  })();

  Bonejs.Object = (function(_super) {
    __extends(Object, _super);

    function Object(options) {
      this.extend = __bind(this.extend, this);
      this;
    }

    Object.prototype.extend = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        this[key] = value;
      }
      return this;
    };

    Object.prototype.keyframe = function() {};

    return Object;

  })(Obj);

  Bonejs.Mouse = (function(_super) {
    __extends(Mouse, _super);

    function Mouse(options) {
      this.x = this.y = 0;
      this;
    }

    Mouse.prototype.getMousePosition = function() {
      return {
        x: this.x,
        y: this.y
      };
    };

    return Mouse;

  })(Obj);

  Bonejs.Object.extend(＝(Bonejs.Mouse.extend = extend));

  window.$bone = Bonejs;

}).call(this);
