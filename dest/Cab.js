(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _Cab = require("./src/Cab.js");

var _Cab2 = _interopRequireDefault(_Cab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.CabJS = _Cab2.default;

},{"./src/Cab.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CabContext = require("./CabContext.js");

var _CabContext2 = _interopRequireDefault(_CabContext);

var _CabClassQueue = require("./CabClassQueue.js");

var _CabClassQueue2 = _interopRequireDefault(_CabClassQueue);

var _CabClass = require("./CabClass.js");

var _CabClass2 = _interopRequireDefault(_CabClass);

var _CabRectClass = require("./CabRectClass.js");

var _CabRectClass2 = _interopRequireDefault(_CabRectClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CabJS = {
    _components: _CabClassQueue2.default,
    setOptions: function setOptions(options) {
        this._context = _CabContext2.default.init(options);
        this.ctx = this._context.ctx;
    },
    start: function start(id) {
        this.setOptions(id);
        this.runKeyframes();
    },
    clear: function clear() {
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this._context.width, this._context.height);
    },
    preframe: function preframe(callback) {
        this._pre_frame = callback;
    },
    runKeyframes: function runKeyframes() {
        if (this._pre_frame) this._pre_frame.call(this);
        this.clear();
        this._components.forEach(function (item) {
            item.render();
        });
        requestAnimationFrame(this.runKeyframes.bind(this));
    }
};

CabJS = Object.assign({
    Class: _CabClass2.default,
    RectClass: _CabRectClass2.default
}, CabJS);

exports.default = CabJS;

},{"./CabClass.js":3,"./CabClassQueue.js":5,"./CabContext.js":6,"./CabRectClass.js":7}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CabContext = require("./CabContext.js");

var _CabContext2 = _interopRequireDefault(_CabContext);

var _CabClassQueue = require("./CabClassQueue.js");

var _CabClassQueue2 = _interopRequireDefault(_CabClassQueue);

var _CabClassExtend = require("./CabClassExtend.js");

var _CabClassExtend2 = _interopRequireDefault(_CabClassExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CabClass = function () {
    function CabClass() {
        _classCallCheck(this, CabClass);

        _CabClassQueue2.default.push(this);
    }

    _createClass(CabClass, [{
        key: "render",
        value: function render() {
            this.keyframe();
        }
    }, {
        key: "keyframe",
        value: function keyframe() {}
    }, {
        key: "ctx",
        get: function get() {
            return _CabContext2.default.ctx;
        }
    }]);

    return CabClass;
}();

CabClass.extend = _CabClassExtend2.default;

exports.default = CabClass;

},{"./CabClassExtend.js":4,"./CabClassQueue.js":5,"./CabContext.js":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CabClassExtent = function CabClassExtent(options) {
    var obj = new this();
    return Object.assign(obj, options);
};

exports.default = CabClassExtent;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CabClassQueue = new Array();

exports.default = CabClassQueue;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CabContext = {
    init: function init(id) {
        this.el = document.getElementById(id);
        this.ctx = this.el.getContext("2d");
        this.width = this.el.width;
        this.height = this.el.height;
        return this;
    }
};

exports.default = CabContext;

},{}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CabClass2 = require("./CabClass.js");

var _CabClass3 = _interopRequireDefault(_CabClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CabRectClass = function (_CabClass) {
    _inherits(CabRectClass, _CabClass);

    function CabRectClass() {
        _classCallCheck(this, CabRectClass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CabRectClass).call(this));
    }

    _createClass(CabRectClass, [{
        key: "render",
        value: function render() {
            this.keyframe();
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }, {
        key: "keyframe",
        value: function keyframe() {}
    }]);

    return CabRectClass;
}(_CabClass3.default);

exports.default = CabRectClass;

},{"./CabClass.js":3}]},{},[1]);
