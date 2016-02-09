let CabContext = {
    init: function(selector) {
        if(typeof selector === "string") {
            this.el = document.querySelector(selector);
        } else if(selector.nodeType) {
            this.el = selector;
        }

        this.ctx = this.el.getContext("2d");
        this.width = this.el.width;
        this.height = this.el.height;
        return this;
    }
}

export default CabContext;
