module('javascript');
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
