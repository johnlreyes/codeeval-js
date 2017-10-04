var Code = function() {
	this.execute = function(inputList) {
		var returnValue = new Array();
		for (var input in inputList) {
			returnValue.push(process(inputList[input]));
		}
		return returnValue.join('\n');
	}
	function process(line) {
		var nextIndexOfFirstChar = line.indexOf(line[0], 1);
		return nextIndexOfFirstChar == -1 ? line.length : nextIndexOfFirstChar;
	}
}

module.exports = Code;

var fs = require('fs');
var lineList = fs.readFileSync(process.argv[2]).toString().match(/[^\r\n]+/g);
console.log(new Code().execute(lineList));