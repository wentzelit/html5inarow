module('Logic - Game');
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