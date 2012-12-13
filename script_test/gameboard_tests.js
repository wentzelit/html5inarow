module('Logic - Game');
test('There is a game function', function() {
    var game = new Game();

    ok(game instanceof Game);
});

test('A token type gets its name from initialization', function() {
    var name = 'Circle';
    var tokenType = new TokenType(name);
    
    equal(tokenType.name, name);
});

test('There is a token function', function() {
   var token = new Token();
   
   ok(token instanceof Token);
});

test('A new token has a token type', function() {
   var tokenType = new TokenType('Circle');
   var token = new Token(tokenType);
   
   equal(token.tokenType, tokenType);
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

test('A new game has a circle token type', function() {
    var game = new Game();

    ok(game.tokenTypes.circle instanceof TokenType);
});

test('Player 1 in a new game has the cross token type', function() {
    var game = new Game();
    var player = game.players[0];
    equal(player.tokenType, game.tokenTypes.cross);
});

test('Player 2 in a new game has the circle token type', function() {
    var game = new Game();
    var player = game.players[1];
    equal(player.tokenType, game.tokenTypes.circle);
});

module('Logic - Player');
test('There is a player object', function() {
    var player = new Player();
    ok(player instanceof Player);
});

test('A player is initialized with a token type', function() {
    var tokenType = new TokenType('Circle');
    var player = new Player(tokenType);
    
    equal(player.tokenType, tokenType);
});

// module('canvas');
// test('there is a canvas', function() {
//	
// ok(true);
// });

/*
 * test('the starting point of a line is at its expected place', function() {
 * 
 * var canvasId = 'canvasId'; var canvas = $('<canvas width="200" height="200"></canvas>');
 * canvas.attr('id', canvasId); $('#qunit-fixture').append(canvas);
 * 
 * drawLine(canvasId, 0, 0, 200, 0); });
 */