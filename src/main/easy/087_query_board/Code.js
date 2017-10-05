var Code = function() {
	this.execute = function(inputList) {
		var returnValue = new Array();
		for (var input in inputList) {
			var result = process(inputList[input]);
			if (result !== null) {
				returnValue.push(result);
			}
		}
		return returnValue.join('\n');
	}
	const MAX_DIMENSION = 256;
	var board = createBoard();
	function process(line) {
		var returnValue = null;
		var arr = line.split(' ');
		var command = arr[0];
		var number = parseInt(arr[1]);
		switch (command) {
		case 'SetCol':
			var value = parseInt(arr[2]);
			setColumn(board, value, number);
			break;
		case 'SetRow':
			var value = parseInt(arr[2]);
			setRow(board, value, number);
			break;
		case 'QueryCol':
			returnValue = queryColumn(board, number);
			break;
		case 'QueryRow':
			returnValue = queryRow(board, number);
			break;
		}
		return returnValue;
	}
	function createBoard() {
		var board = new Array(MAX_DIMENSION);
		for (var i=0; i<MAX_DIMENSION; i++) {
			board[i] = new Array(MAX_DIMENSION);
			board[i].fill(0);
		}
		return board;
	}
	function setColumn(board, value, col) {
		for (var i=0; i<MAX_DIMENSION; i++) {
			board[col][i] = value;
		}
	}
	function setRow(board, value, row) {
		for (var i=0; i<MAX_DIMENSION; i++) {
			board[i][row] = value;
		}
	}
	function queryColumn(board, col) {
		var sum = 0;
		for (var i=0; i<MAX_DIMENSION; i++) {
			sum += board[col][i];
		}
		return sum;
	}
	function queryRow(board, row) {
		var sum = 0;
		for (var i=0; i<MAX_DIMENSION; i++) {
			sum += board[i][row];
		}
		return sum;
	}
}

module.exports = Code;

var fs = require('fs');
var lineList = fs.readFileSync(process.argv[2]).toString().match(/[^\r\n]+/g);
console.log(new Code().execute(lineList));