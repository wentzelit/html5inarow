function Game() {
	this.players = [new Player(), new Player()];
	this.gridModel = new GridModel();
}

Game.prototype.tokenTypes = {
		cross: new TokenType('Cross'),
		circle: new TokenType('Circle')
	};

function Player() {

}

function GridModel() {

}

function TokenType() {

}