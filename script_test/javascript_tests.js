module('Javascript');
test('empty string equal to false', function() {
    assert.equal('', false);
});

test('empty string is not strictly equal to false', function() {
    assert.notStrictEqual('', false);
});

test('!false === true', function() {
    assert.ok(!false === true);
});

test('!null === true', function() {
    assert.ok(!null === true);
});

test('!undefined === true', function() {
    assert.ok(!undefined === true);
});

test('undefined !== null', function() {
    assert.ok(undefined !== null);
});

test('new object of type1 is instanceof type1', function() {
    function type1() {
    }

    var obj1 = new type1();

    assert.ok(obj1 instanceof type1);
});

test('new object of type1 is not instanceof type2', function() {
	function type1() {}
	function type2() {}
	
	var obj1 = new type1();
	
	assert.ok(obj1 instanceof type2 === false);
});

function IllegalPlacementException() {
    
}


test('assert.throws can test for an exception', function() {
    function x() { throw new IllegalPlacementException() ;}
    
    assert.throws(x, IllegalPlacementException);
});

test('isTrue succeeds on true', function() {
    assert.isTrue(true);
});

test('isFalse succeeds on not false', function() {
    assert.isFalse(false);
});

test('doesNotThrow succeeds on no exception', function() {
    assert.doesNotThrow(function() { });
});

function ExceptionType1() {}
function ExceptionType2() {}

test('doesNotThrow succeeds on other than matching exception', function() {
    assert.doesNotThrow(function() { throw new ExceptionType1()},
	    ExceptionType2)
});

test('doesNotThrow fails on exception', function() {
    assert.doesNotThrow(function() { throw 'exception'; }, 'Expected failure');
});

test('doesNotThrow fails on matching exception', function() {
    assert.doesNotThrow(function() { throw new ExceptionType1(); },
	    ExceptionType1,
	    'Expected failure');
});
