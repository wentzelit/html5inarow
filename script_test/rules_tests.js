module('Rules');
test('A token can\'t be placed on another token', function() {
    
    var gridModel = new GridModel();
    var tokenType = new TokenType('circle');
    var token = new Token(tokenType);
    var rules = new Rules(gridModel);
    
    gridModel.addToken(token, 0, 0);
    
    equal(rules.okToAddToken(0, 0), false);
});

test('A token can be placed where there is no other token', function() {
    
    var gridModel = new GridModel();
    var tokenType = new TokenType('circle');
    var token = new Token(tokenType);
    var rules = new Rules(gridModel);
    
    ok(rules.okToAddToken(0, 0));
});