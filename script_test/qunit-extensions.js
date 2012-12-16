QUnit.extend(QUnit.assert, {
    isTrue : function(actual, message) {
	QUnit.push(actual === true, actual, true, message);
    },
    isFalse : function(actual, message) {
	QUnit.push(actual === false, actual, false, message);
    },
    doesNotThrow : function(block, expected, message) {
	var actual, ok = true;

	// 'expected' is optional
	if (typeof expected === "string") {
	    message = expected;
	    expected = null;
	}

	QUnit.config.current.ignoreGlobalErrors = true;
	try {
	    block.call(QUnit.config.current.testEnvironment);
	} catch (e) {
	    actual = e;
	}
	QUnit.config.current.ignoreGlobalErrors = false;

	if (actual) {
	    // we don't want to validate thrown error
	    if (!expected) {
		ok = false;
		// expected is a regexp
	    } else if (QUnit.objectType(expected) === "regexp") {
		ok = !expected.test(actual);
		// expected is a constructor
	    } else if (actual instanceof expected) {
		ok = false;
		// expected is a validation function which returns true is
		// validation passed
	    } else if (expected.call({}, actual) === true) {
		ok = false;
	    }

	    QUnit.push(ok, actual, null, message);
	} else {
	    QUnit.push(true, null, 'No exception was thrown.');
	}
    }

});