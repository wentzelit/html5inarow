function Game() {
    this.gridModel = new GridModel();

    this.players = [ new Player(this.tokenTypes.cross),
	    new Player(this.tokenTypes.circle) ];

    this.currentPlayer = this.players[0];
}

Game.prototype.tokenTypes = {
    cross : new TokenType('cross'),
    circle : new TokenType('circle')
};

Game.prototype.getPlayer = function() {

};

Game.prototype.addToken = function() {
    throw new WrongPlayerException();
};
