module('Rules');
test('The rules do not allow a token to be placed on another token',
	function() {
    
    var gridModel = new GridModel();
    var tokenType = new TokenType('circle');
    var token = new Token(tokenType);
    var rules = new Rules(gridModel);
    
    gridModel.setToken(token, 0, 0);
    
    assert.equal(rules.okToAddToken(0, 0), false);
});

test('The rules allow a token to be placed where there is no other token',
	function() {
    
    var gridModel = new GridModel();
    var tokenType = new TokenType('circle');
    var token = new Token(tokenType);
    var rules = new Rules(gridModel);
    
    assert.ok(rules.okToAddToken(0, 0));
});