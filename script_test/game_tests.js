module('Game');
test('There is a game function', function() {
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

test('A game has a current player', function() {
    var game = new Game();
    ok(game.currentPlayer instanceof Player);
});

test('When it\'s player 1\'s turn player 2 cannot add a token', function() {
    var game = new Game();
    var player2 = game.getPlayer(1);

    raises(function() {
	game.addToken(player2, 0, 0);
    }, WrongPlayerException);
});

test('When it\'s player 1\'s turn player 1 can add a token', function() {
    var game = new Game();
    var player1 = game.getPlayer(0);

    game.addToken(player1, 0, 0);

    // We just make sure there's no exception
    ok(true);
});
