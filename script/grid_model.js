function GridModel() {
    this.tokens = [];
}

GridModel.prototype.addToken = function(token, x, y) {

    if (this.tokens[x] === undefined) {
	this.tokens[x] = [];
    };
    this.tokens[x][y] = token;
};

GridModel.prototype.getToken = function(x, y) {
    if (this.tokens[x] instanceof Array) {
	if (this.tokens[x][y] instanceof Token) {
	    return this.tokens[x][y];
	}
    }
    return null;
};
