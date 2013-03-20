( function($) {'use strict';
    var defaults = {
        height : 200,
        width : 200,
        cellCount : 10
    }

    function Html5InARow(element, options) {
        var cellWidth, cellHeight, context;
        var selectedCell;

        function drawGrid(width, height, count) {
            cellHeight = height / count;
            cellWidth = width / count;

            context.lineWidth = 1;
            context.strokeStyle = '#000000';

            var i, x, y;
            for ( i = 0; i <= count; i++) {
                x = i * cellWidth;

                context.moveTo(x, 0);
                context.lineTo(x, height);
                context.stroke();
            }

            for ( i = 0; i <= count; i++) {
                y = i * cellHeight;

                context.moveTo(0, y);
                context.lineTo(width, y);
                context.stroke();
            }
        }

        function gameBoardMouseMoveHandler(event) {

            var x = event.pageX - $(this).offset().left;
            var y = event.pageY - $(this).offset().top;

            console.log('clicked x: ' + x + ' y: ' + y);

            var cell = getCellFromMouseCoordinates(x, y);
            console.log('clicked cell: ' + cell.x + ', ' + cell.y);

            if (!selectedCell || selectedCell.x !== cell.x || selectedCell.y !== cell.y) {

                if (selectedCell) {
                    clearCell(selectedCell);
                }

                fillCell(cell);
                selectedCell = cell;
            }
        }

        function gameBoardMouseLeaveHandler(event) {
            var x = event.pageX - $(this).offset().left;
            var y = event.pageY - $(this).offset().top;

            console.log('clicked x: ' + x + ' y: ' + y);

            var cell = getCellFromMouseCoordinates(x, y);
            console.log('clicked cell: ' + cell.x + ', ' + cell.y);

            if (selectedCell) {

                clearCell(selectedCell);

                selectedCell = null;
            }
        }

        function getCellFromMouseCoordinates(mouseX, mouseY) {
            var fullCellsX = Math.floor(mouseX / cellWidth);
            var remainderX = mouseX % cellWidth;
            var fullCellsY = Math.floor(mouseY / cellHeight);
            var remainderY = mouseY % cellHeight;

            return {
                x : fullCellsX,
                y : fullCellsY
            }
            //return {
            //    x : remainderX === 0 ? fullCellsX : fullCellsX + 1,
            //    y : remainderY === 0 ? fullCellsY : fullCellsY + 1
            //}
        }

        function clearCell(cell) {
            context.clearRect(cell.x * cellWidth, cell.y * cellHeight, cellWidth, cellHeight);

            context.strokeRect(cell.x * cellWidth, cell.y * cellHeight, cellWidth, cellHeight);
        }

        function fillCell(cell) {

            context.fillStyle = '#aaaaff';

            context.fillRect(cell.x * cellWidth, cell.y * cellHeight, cellWidth, cellHeight);

            context.strokeRect(cell.x * cellWidth, cell.y * cellHeight, cellWidth, cellHeight);
        }

        function initGame(element) {
            var gameBoard, controlPanel, canvas;

            gameBoard = $('<div></div>');

            gameBoard.addClass('gameboard');

            canvas = $('<canvas></canvas>');
            canvas.attr('width', options.width);
            canvas.attr('height', options.height);
            canvas.on('mousemove', gameBoardMouseMoveHandler);
            canvas.on('mouseleave', gameBoardMouseLeaveHandler);

            gameBoard.append(canvas);

            context = canvas[0].getContext('2d');
            drawGrid(options.width, options.height, options.cellCount);

            controlPanel = $('<div>Control Panel</div>');

            controlPanel.addClass('controlpanel');

            element.append(gameBoard);
            element.append(controlPanel);

            console.log(gameBoard.outerWidth());
        }

        initGame(element);

    }


    $.fn.html5inarow = function(options) {
        return this.each(function(index, element) {
            Html5InARow($(element), $.extend({}, defaults, options));
        });

    };

}(jQuery))
