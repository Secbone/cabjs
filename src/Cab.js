import CabContext from "./CabContext.js";
import CabClassQueue from "./CabClassQueue.js";
import CabClass from "./CabClass.js";
import CabRectClass from "./CabRectClass.js";

let CabJS = {
    _components: CabClassQueue,
    setOptions: function(options) {
        this._context = CabContext.init(options);
        this.ctx = this._context.ctx;
    },
    start: function(id) {
        this.setOptions(id);
        this.runKeyframes();
    },
    clear: function() {
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this._context.width, this._context.height);
    },
    runKeyframes: function() {
        this.clear();
        this._components.forEach(item => {
            item.render();
        });
        requestAnimationFrame(this.runKeyframes.bind(this));
    }
};

CabJS = Object.assign({
    Class: CabClass,
    RectClass: CabRectClass,
}, CabJS);

module.exports = CabJS;
