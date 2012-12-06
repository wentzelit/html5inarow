module('Logic');
test('There is a game object', function() {
	var game = new Game();
	
	ok(game);
});

test('There is a player object', function() {
	var player = new Player();
	
	ok(player);
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