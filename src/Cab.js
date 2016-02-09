import CabContext from "./CabContext.js";
import CabClassQueue from "./CabClassQueue.js";
import CabClass from "./CabClass.js";
import CabRectClass from "./CabRectClass.js";

let CabJS = {
    _pre_frame: new Array(),
    _components: CabClassQueue,
    setOptions: function(options) {
        this._context = CabContext.init(options);
        this.ctx = this._context.ctx;
    },
    start: function(selector) {
        this.setOptions(selector);
        this.runKeyframes();
    },
    clear: function() {
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this._context.width, this._context.height);
    },
    preframe: function(callback) {
        this._pre_frame.push(callback);
    },
    runKeyframes: function() {
        if(this._pre_frame.length){
            this._pre_frame.forEach(item => item.call(this));
        }

        this.clear();
        this._components.forEach(item => {
            item.render();
        });
        requestAnimationFrame(this.runKeyframes.bind(this));
    },
};

CabJS = Object.assign({
    Class: CabClass,
    RectClass: CabRectClass,
}, CabJS);

export default CabJS;
