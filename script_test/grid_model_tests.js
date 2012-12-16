module('GridModel');
test('A token can be added to a grid model', function() {
    var gridModel = new GridModel();
    var tokenType = new TokenType('circle');
    var token = new Token(tokenType);
    
    gridModel.addToken(token, 0, 0);
    
    equal(gridModel.getToken(0, 0), token);
    
});

test('A token added at 1,2 can be retrieved', function() {
    var gridModel = new GridModel();
    var tokenType = new TokenType('circle');
    var token = new Token(tokenType);
    
    gridModel.addToken(token, 1, 2);
    
    equal(gridModel.getToken(1, 2), token);
});

test('After having added some tokens, each can be retrieved', function() {
    expect(4);
    
    var gridModel = new GridModel();
    var token1 = new Token(new TokenType('circle'));
    var token2 = new Token(new TokenType('cross'));
    var token3 = new Token(new TokenType('circle'));
    var token4 = new Token(new TokenType('cross'));
    
    gridModel.addToken(token1, 0, 0);
    gridModel.addToken(token2, 1, 2);
    gridModel.addToken(token3, 0, 2);
    gridModel.addToken(token4, 18, 19);
    
    equal(gridModel.getToken(0, 0), token1, 'Token 1 was not retrieved');
    equal(gridModel.getToken(1, 2), token2, 'Token 2 was not retrieved');
    equal(gridModel.getToken(0, 2), token3, 'Token 3 was not retrieved');
    equal(gridModel.getToken(18, 19), token4, 'Token 4 was not retrieved');
});