function Game() {
    this.gridModel = new GridModel();

    this.players = [new Player(this.tokenTypes.cross), new Player(this.tokenTypes.circle)];

    this.currentPlayer = 0;
}

Game.prototype.tokenTypes = {
    cross : new TokenType('cross'),
    circle : new TokenType('circle')
};

Game.prototype.getPlayer = function(playerNumber) {
    return this.players[playerNumber];
};

Game.prototype.getCurrentPlayer = function() {
    return this.players[this.currentPlayer];
};

Game.prototype.addToken = function(player, x, y) {

    if (player === this.getCurrentPlayer()) {
        this.gridModel.setToken(new Token(player.tokenType), x, y);
        this.changeToNextCurrentPlayer();
    } else {
        throw new WrongPlayerException();
    }
};

Game.prototype.changeToNextCurrentPlayer = function() {
    this.currentPlayer ^=1;
};
