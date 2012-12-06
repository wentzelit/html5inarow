module('Logic - Game');
test('There is a game object', function() {
	var game = new Game();
	
	ok(game instanceof Game);
});

test('A new game has two players', function() {
	var game = new Game();
	
	equal(game.players.length, 2);
});

test('A new game has a grid model', function() {
	var game = new Game();
	
	ok(game.gridModel instanceof GridModel);
});


test('A new game has a cross token type', function() {
	var game = new Game();
	
	ok(game.tokenTypes.cross instanceof TokenType);
});

module('Logic - Player');
test('There is a player object', function() {
	var player = new Player();
	
	ok(player instanceof Player);
});




//module('canvas');
//test('there is a canvas', function() {
//	
//	ok(true);
//});



/*
test('the starting point of a line is at its expected place', function() {

	var canvasId = 'canvasId';
	var canvas = $('<canvas width="200" height="200"></canvas>');
	canvas.attr('id', canvasId);
	$('#qunit-fixture').append(canvas);
	
	drawLine(canvasId, 0, 0, 200, 0);
});
*/