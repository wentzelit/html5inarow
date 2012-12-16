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

Game.prototype.getPlayer = function(playerNumber) {
    return this.players[playerNumber];
};

Game.prototype.addToken = function(player, x, y) {

    if (player === this.currentPlayer) {
	this.gridModel.setToken(new Token(player.tokenType), x, y);
    } else {
	throw new WrongPlayerException();
    }
};
