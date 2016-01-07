let BoneJS = {
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

class Component {
    constructor() {
        BoneJS._components.push(this);
    }

    keyframe() {

    }
}

module.exports = BoneJS;
