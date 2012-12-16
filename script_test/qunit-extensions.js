QUnit.extend(QUnit.assert, {
    isTrue: function(actual, message) {
	QUnit.push(actual === true, actual, true, message);
    }
    
});