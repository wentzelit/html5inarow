function Rules(gridModel) {
    this.gridModel = gridModel;
}

Rules.prototype.okToAddToken = function(x, y) {
    if (this.gridModel.getToken(x, y)) {
	return false;
    }
    return true;
}