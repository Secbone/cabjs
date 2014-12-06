(function() {
  var Bonejs, Obj,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Bonejs = (function() {
    function Bonejs(selector, size) {
      this._autoResize = __bind(this._autoResize, this);
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

    Bonejs.prototype.setSize = function(size) {
      this.setWidth(size[0]);
      return this.setHeight(size[1]);
    };

    Bonejs.prototype.setWidth = function(width) {
      var canvasWidth;
      this._width = width;
      canvasWidth = width > 1 ? width : this._canvas.parentNode.offsetWidth * width;
      return this._canvas.style.width = "" + canvasWidth + "px";
    };

    Bonejs.prototype.setHeight = function(height) {
      var canvasHeight;
      this._height = height;
      canvasHeight = height > 1 ? height : this._canvas.parentNode.offsetHeight * height;
      return this._canvas.style.height = "" + canvasHeight + "px";
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

    Bonejs.prototype.fillRect = function(rectArray, color) {
      var _ref;
      this._painter.fillStyle = color;
      return (_ref = this._painter).fillRect.apply(_ref, rectArray);
    };

    return Bonejs;

  })();

  Obj = (function() {
    Obj.prototype.properties = {
      height: 'auto',
      width: 'auto'
    };

    function Obj(options) {
      this.options = options;
      this._setProperties();
    }

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

    window.B = Bonejs;

    return Obj;

  })();

}).call(this);
