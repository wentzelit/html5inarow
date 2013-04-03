function Rules(gridModel) {
    this.gridModel = gridModel;
    
    this.counter = 0; // temp ugly solution
}

Rules.prototype.okToAddToken = function(x, y) {
    if (this.gridModel.getToken(x, y)) {
	return false;
    }
    return true;
};

Rules.prototype.isGameOver = function() {
    this.counter += 1;
    console.log("rules.counter: " + this.counter);
    return this.counter >= 2;
};

Rules.prototype.doesPlacementCauseGameOver = function(player, x, y) {
    var tokenType = player.tokenType;
    // har player tillräckligt många tokens?
    
    // utgå från x, y
    
    // för varje axel (4 st)
    
    //sök start och slut
    var currY, startY = y, endY = y, currToken;
    for (currY = y - 1; currY <= 0; currY--) {
        currToken = this.gridModel.getToken(x, y);
        
        if (currToken === tokenType) {
            startY = currY;
        }
        else {
            break;
        }
    }
    
    for (currY = y + 1; this)
    // om en axel har 5 st tokens
    if (tokensInARow > 4) {
        //vinn!
        return true;
    }
    // vinn inte
    return false;
};
