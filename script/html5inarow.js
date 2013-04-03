( function($) {'use strict';
    var defaults = {
        height : 200,
        width : 200,
        cellCount : 10
    };

    function Html5InARow(element, options) {
        var cellWidth, cellHeight, gridContext, highlightContext, tokenContext,
          selectedCell;

        function drawLine(context, start, end) {
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.stroke();
        }
        
        function clearCell(context, cell) {
            context.clearRect(cell.x * cellWidth,
                cell.y * cellHeight,
                cellWidth,
                cellHeight);

            //context.strokeRect(cell.x * cellWidth, cell.y * cellHeight, cellWidth, cellHeight);
        }
        
        function fillCell(context, cell) {

            context.fillStyle = '#aaaaff';

            context.fillRect(
                cell.x * cellWidth,
                cell.y * cellHeight,
                cellWidth, 
                cellHeight);

            //context.strokeRect(cell.x * cellWidth, cell.y * cellHeight, cellWidth, cellHeight);
        }

        function drawGrid(context, width, height, count) {
            cellHeight = height / count;
            cellWidth = width / count;

            context.lineWidth = 1;
            context.strokeStyle = '#000000';

            var i, x, y, pixelMod;
            for ( i = 0; i <= count; i = i + 1 ) {
                x = i * cellWidth;

                pixelMod = i === 0 || i === count ? 0 : 0.5;
                
                drawLine(context,
                    { x: x + pixelMod, y: 0}, 
                    { x: x + pixelMod, y: height }
                );
            }

            for ( i = 0; i <= count; i = i + 1 ) {
                y = i * cellHeight;

                pixelMod = i === 0 || i === count ? 0 : 0.5;
                
                drawLine(context,
                    { x: 0, y: y + pixelMod }, 
                    { x: width, y: y + pixelMod }
                );
            }
        }

        function getMouseCoordinatesFromEvent(event) {
            var x = event.pageX,// - $(this).offset().left,
            y = event.pageY;// - $(this).offset().top;

            return { x: x, y: y};
        } 

        function getCellFromMouseCoordinates(mouseX, mouseY) {
            var fullCellsX = Math.floor(mouseX / cellWidth),
                remainderX = mouseX % cellWidth,
                fullCellsY = Math.floor(mouseY / cellHeight),
                remainderY = mouseY % cellHeight;

            return {
                x : fullCellsX,
                y : fullCellsY
            };
        }

        function gameBoardMouseMoveHandler(event) {

            var x = event.pageX - $(this).offset().left,
                y = event.pageY - $(this).offset().top,
                cell = getCellFromMouseCoordinates(x, y);
            //console.log('current cell at: ' + cell.x + ', ' + cell.y);

            if (!selectedCell || selectedCell.x !== cell.x || selectedCell.y !== cell.y) {

                if (selectedCell) {
                    clearCell(highlightContext, selectedCell);
                }

                fillCell(highlightContext, cell);
                selectedCell = cell;
            }
        }

        
        function gameBoardMouseLeaveHandler(event) {
            var x = event.pageX - $(this).offset().left,
                y = event.pageY - $(this).offset().top,
                cell = getCellFromMouseCoordinates(x, y);


            if (selectedCell) {
                clearCell(hightlightContext, selectedCell);
                selectedCell = null;
            }
        }


        function drawCross(context, cell) {
            var x = cell.x * cellWidth + cellWidth / 2,
                y = cell.y * cellHeight + cellHeight / 2;
            
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = 'bold ' + cellHeight + 'pt sans-serif';
            context.fillText('X', x, y);
            
        }

        function drawCircle(context, cell) {
            var x = cell.x * cellWidth + cellWidth / 2,
                y = cell.y * cellHeight + cellHeight / 2;
            
            context.beginPath();    
            context.arc(x, y, cellWidth / 2.5, 0, Math.PI * 2, true);
            context.stroke();
            //console.log('drawCircle');
            
        }

        function drawToken(cell, token) {
            if (token === 'cross') {
                drawCross(tokenContext, cell);
            }
            else {
                drawCircle(tokenContext, cell);
            }
        }
        
        var token = 'cross';
        function gameBoardMouseClickHandler(event) {
            var coords = getMouseCoordinatesFromEvent(event),
                cell = getCellFromMouseCoordinates(coords.x, coords.y);
            
            console.log('clicked x: ' + cell.x + ', y: ' + cell.y);
            drawToken(cell, token);
            
            token = token === 'cross' ? 'circle' : 'cross';
        }

        function initGame(element) {
            var gameBoard, controlPanel, gridCanvas, highlightCanvas,
            tokenCanvas;

            gameBoard = document.createElement('div');

            gameBoard.className = 'gameboard';
            gameBoard.style.height = options.height + 'px';
            gameBoard.style.width = options.width + 'px';

            gridCanvas = document.createElement('canvas'); //$('<canvas></canvas>');
            gridCanvas.width = options.width;
            gridCanvas.height = options.height;
            gridCanvas.style.position = 'absolute';
            
            highlightCanvas = document.createElement('canvas');
            highlightCanvas.width = options.width;
            highlightCanvas.height = options.height;
            highlightCanvas.style.position = 'absolute';
            
            tokenCanvas = gridCanvas.cloneNode();
            
            tokenCanvas.addEventListener('mousemove', gameBoardMouseMoveHandler);
            tokenCanvas.addEventListener('mouseleave', gameBoardMouseLeaveHandler);
            
            tokenCanvas.addEventListener('click', gameBoardMouseClickHandler);
            
            gameBoard.appendChild(highlightCanvas);
            gameBoard.appendChild(gridCanvas);
            gameBoard.appendChild(tokenCanvas);
            
            gridContext = gridCanvas.getContext('2d');
            highlightContext = highlightCanvas.getContext('2d');
            tokenContext = tokenCanvas.getContext('2d');
            drawGrid(gridContext, options.width, options.height, options.cellCount);

            controlPanel = $('<div>Control Panel</div>');

            controlPanel.addClass('controlpanel');

            element.append(gameBoard);
            element.append(controlPanel);

            //console.log(gameBoard.outerWidth());
        }

        initGame(element);

    }


    $.fn.html5inarow = function(options) {
        return this.each(function(index, element) {
            Html5InARow($(element), $.extend({}, defaults, options));
        });

    };

}(jQuery))
