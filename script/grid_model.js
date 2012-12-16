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
    return this.tokens[x][y];
};
