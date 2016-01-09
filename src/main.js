let CabJS = {
    _components: [],
    start: function() {
        requestAnimationFrame(this.runKeyframes);
    },
    runKeyframes: function() {
        this._components.forEach(item => {
            item.keyframe();
        });
        requestAnimationFrame(this.runKeyframes);
    }
};

class CabClass {
    constructor() {
        CabJS._components.push(this);
    }

    keyframe() {

    }
}

module.exports = CabJS;
