function Game() {
    this.gridModel = new GridModel();

    this.players = [new Player(this.tokenTypes.cross), new Player(this.tokenTypes.circle)];
    this.players[0].name = 'Player 1';
    this.players[1].name = 'Player 2';

    this.currentPlayer = 0;

    this.gameModelUpdatedHandlers = [];

    this.gameOverHandlers = [];

    this.rules = new Rules(this.gridModel);
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
        this.triggerGameModelUpdated(player, x, y);
        if (this.rules.isGameOver()) {
            this.triggerGameOver(player);
        } else {
            this.changeToNextCurrentPlayer();
        }
    } else {
        throw new WrongPlayerException();
    }
};

Game.prototype.isPlacementAllowed = function(player, x, y) {
    if (player !== this.getCurrentPlayer()) {
        return false;
    }
    if (!this.rules.okToAddToken(x, y)) {
        return false;
    }
    return true;
};

Game.prototype.changeToNextCurrentPlayer = function() {
    this.currentPlayer ^=1;
};

Game.prototype.triggerEvent = function(handlers, event) {
    var i;
    for ( i = 0; i < handlers.length; i++) {
        handlers[i](event);
    }
};

Game.prototype.addGameModelUpdatedHandler = function(handler) {
    this.gameModelUpdatedHandlers.push(handler);
};

Game.prototype.triggerGameModelUpdated = function(player, x, y) {
    var event = {
        player : player,
        x : x,
        y : y
    };
    this.triggerEvent(this.gameModelUpdatedHandlers, event);
};

Game.prototype.addGameOverHandler = function(handler) {
    this.gameOverHandlers.push(handler);
};

Game.prototype.triggerGameOver = function(player) {
    var event = {
        winner : player
    };
    this.triggerEvent(this.gameOverHandlers, event);
};
