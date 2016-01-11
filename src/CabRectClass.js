import CabClass from "./CabClass.js";

class CabRectClass extends CabClass {
    constructor() {
        super();
    }

    render() {
        this.keyframe();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    keyframe() {

    }
}

export default CabRectClass;
