let CabContext = {
    init: function(id) {
        this.el = document.getElementById(id);
        this.ctx = this.el.getContext("2d");
        this.width = this.el.width;
        this.height = this.el.height;
        return this;
    }
}

export default CabContext;
