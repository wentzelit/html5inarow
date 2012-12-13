module('GridModel');
test('A token can be added to a grid model', function() {
    var gridModel = new GridModel();
    var tokenType = new TokenType('Circle');
    var token = new Token(tokenType);
    
    gridModel.addToken(token, 0, 0);
    equal(gridModel.getToken(0, 0), token);
    
});