module('Game');
test('There is a game function', function() {
    var game = new Game();

    assert.ok(game instanceof Game);
});

test('A new game has two players', function() {
    var game = new Game();

    assert.equal(game.players.length, 2);
});

test('A new game has a grid model', function() {
    var game = new Game();

    assert.ok(game.gridModel instanceof GridModel);
});

test('A new game has a cross token type', function() {
    var game = new Game();

    assert.ok(game.tokenTypes.cross instanceof TokenType);
});

test('A new game has a circle token type', function() {
    var game = new Game();

    assert.ok(game.tokenTypes.circle instanceof TokenType);
});

test('Player 1 in a new game has the cross token type', function() {
    var game = new Game();
    var player = game.players[0];
    assert.equal(player.tokenType, game.tokenTypes.cross);
});

test('Player 2 in a new game has the circle token type', function() {
    var game = new Game();
    var player = game.players[1];
    assert.equal(player.tokenType, game.tokenTypes.circle);
});

test('A game has a current player', function() {
    var game = new Game();
    assert.ok(game.getCurrentPlayer() instanceof Player);
});

test('When it\'s player 1\'s turn player 2 cannot add a token', function() {
    var game = new Game();
    var player2 = game.getPlayer(1);

    throws(function() {
	game.addToken(player2, 0, 0);
    }, WrongPlayerException);
});

test('When it\'s player 1\'s turn player 1 can add a token', function() {
    var game = new Game();
    var player1 = game.getPlayer(0);

    try {
	game.addToken(player1, 0, 0);
	assert.ok(true);
    } catch (ex) {
	assert.ok(false, ex.message);
    }
});

test('When a player1 has placed his first token it\'s player2\'s turn',
	function() {
	    var game = new Game();
	    var player1 = game.getPlayer(0);
	    var player2 = game.getPlayer(1);

	    game.addToken(player1, 5, 5);

	    assert.strictEqual(game.getCurrentPlayer(), player2);
	});

test('When both players has placed their first tokens it\'s player1\'s turn',
	function() {
	    var game = new Game();
	    var player1 = game.getPlayer(0);
	    var player2 = game.getPlayer(1);

	    game.addToken(player1, 5, 5);
	    game.addToken(player2, 4, 5);

	    assert.strictEqual(game.getCurrentPlayer(), player1);
	});
