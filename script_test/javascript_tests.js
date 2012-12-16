module('Javascript');
test('empty string equal to false', function() {
	equal('', false);
});

test('empty string is not strictly equal to false', function() {
	notStrictEqual('', false); 
});

test('!false === true', function() {
	ok(!false === true);
});

test('!null === true', function() {
	ok(!null === true);
});

test('!undefined === true', function() {
	ok(!undefined === true);
});

test('undefined !== null', function() {
	ok(undefined !== null);
});

test('new object of type1 is instanceof type1', function() {
	function type1() {}
	
	var obj1 = new type1();
	
	ok(obj1 instanceof type1);
});

test('new object of type1 is not instanceof type2', function() {
	function type1() {}
	function type2() {}
	
	var obj1 = new type1();
	
	assert.ok(obj1 instanceof type2 === false);
});

function IllegalPlacementException() {
    
}


test('raises can test for an exception', function() {
    function x() { throw new IllegalPlacementException() ;}
    
    assert.throws(x, IllegalPlacementException);
});

test('isTrue succeeds on true', function() {
    assert.isTrue(true);
});
