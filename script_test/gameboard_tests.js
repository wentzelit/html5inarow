test('the starting point of a line is at its expected place', function() {

	var canvasId = 'canvasId';
	var canvas = $('<canvas width="200" height="200"></canvas>');
	canvas.attr('id', canvasId);
	$('#qunit-fixture').append(canvas);
	
	drawLine(canvasId, 0, 0, 200, 0);
	
	
});