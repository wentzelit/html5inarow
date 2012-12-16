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
    function type1() {
    }
    function type2() {
    }

    var obj1 = new type1();

    assert.ok(obj1 instanceof type2 === false);
});
