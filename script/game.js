function Player(tokenType) {
    this.tokenType = tokenType;
}

function GridModel() {

}

function TokenType(name) {
    this.name = name;
}

function Token(tokenType) {
    this.tokenType = tokenType;
}

function Game() {
    this.gridModel = new GridModel();
    
    this.players = [ new Player(this.tokenTypes.cross),
	    new Player(this.tokenTypes.circle) ];
    
    this.currentPlayer = this.players[0];
}

Game.prototype.tokenTypes = {
    cross : new TokenType('Cross'),
    circle : new TokenType('Circle')
};
