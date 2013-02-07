QUnit.module('Game');
QUnit.test('There is a game function', function() {
    var game = new Game();

    QUnit.assert.ok( game instanceof Game);
});

QUnit.test('A new game has two players', function() {
    var game = new Game();

    QUnit.assert.equal(game.players.length, 2);
});

QUnit.test('A new game has a grid model', function() {
    var game = new Game();

    QUnit.assert.ok(game.gridModel instanceof GridModel);
});

QUnit.test('A new game has a cross token type', function() {
    var game = new Game();

    QUnit.assert.ok(game.tokenTypes.cross instanceof TokenType);
});

QUnit.test('A new game has a circle token type', function() {
    var game = new Game();

    QUnit.assert.ok(game.tokenTypes.circle instanceof TokenType);
});

QUnit.test('Player 1 in a new game has the cross token type', function() {
    var game = new Game();
    var player = game.players[0];
    QUnit.assert.equal(player.tokenType, game.tokenTypes.cross);
});

QUnit.test('Player 2 in a new game has the circle token type', function() {
    var game = new Game();
    var player = game.players[1];
    QUnit.assert.equal(player.tokenType, game.tokenTypes.circle);
});

QUnit.test('A game has a current player', function() {
    var game = new Game();
    assert.ok(game.getCurrentPlayer() instanceof Player);
});

QUnit.test('When it\'s player 1\'s turn player 2 cannot add a token', function() {
    var game = new Game();
    var player2 = game.getPlayer(1);

    QUnit.raises(function() {
        game.addToken(player2, 0, 0);
    }, WrongPlayerException);
});

QUnit.test('When it\'s player 1\'s turn player 1 can add a token', function() {
    var game = new Game();
    var player1 = game.getPlayer(0);

    try {
        game.addToken(player1, 0, 0);
        QUnit.assert.ok(true);
    } catch (ex) {
        QUnit.assert.ok(false, ex.message);
    }
});

QUnit.test('When a player1 has placed his first token it\'s player2\'s turn', function() {
    var game = new Game();
    var player1 = game.getPlayer(0);
    var player2 = game.getPlayer(1);

    game.addToken(player1, 5, 5);

    QUnit.assert.strictEqual(game.getCurrentPlayer(), player2);
});

QUnit.test('When both players has placed their first tokens it\'s player1\'s turn', function() {
    var game = new Game();
    var player1 = game.getPlayer(0);
    var player2 = game.getPlayer(1);

    game.addToken(player1, 5, 5);
    game.addToken(player2, 4, 5);

    QUnit.assert.strictEqual(game.getCurrentPlayer(), player1);
});

QUnit.test('A token can be placed on an empty cell', function() {
    var game = new Game();

    try {
        game.addToken(game.getPlayer(0), 0, 0);
        QUnit.assert.ok(true);
    } catch (ex) {
        QUnit.assert.ok(false, ex.message);
    }

});

QUnit.test('Placing a token on another token throws an exception', function() {
    var game = new Game();
    game.addToken(game.getPlayer(0), 0, 0);

    QUnit.assert.throws(function() {
        game.addToken(game.getPlayer(1), 0, 0)
    }, IllegalPlacementException);

});

