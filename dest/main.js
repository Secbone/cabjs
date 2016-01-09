"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CabJS = {
    _components: [],
    start: function start() {
        requestAnimationFrame(this.runKeyframes);
    },
    runKeyframes: function runKeyframes() {
        this._components.forEach(function (item) {
            item.keyframe();
        });
        requestAnimationFrame(this.runKeyframes);
    }
};

var CabClass = function () {
    function CabClass() {
        _classCallCheck(this, CabClass);

        CabJS._components.push(this);
    }

    _createClass(CabClass, [{
        key: "keyframe",
        value: function keyframe() {}
    }]);

    return CabClass;
}();

module.exports = CabJS;