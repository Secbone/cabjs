import CabContext from "./CabContext.js";
import CabClassQueue from "./CabClassQueue.js";
import CabClassExtend from "./CabClassExtend.js";

class CabClass {
    constructor() {
        CabClassQueue.push(this);
    }

    get ctx() {
        return CabContext.ctx;
    }

    render() {
        this.keyframe();
    }

    keyframe() {

    }
}

CabClass.extend = CabClassExtend;

export default CabClass;
