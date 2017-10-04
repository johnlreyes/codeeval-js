var Code = function() {
	this.execute = function(inputList) {
		var returnValue = new Array();
		for (var input in inputList) {
			var input = new Input(inputList[input]);
			var resultList = toResultList(input);
			returnValue.push(resultList.join(' '));
		}
		return returnValue.join('\n');
	}
	function toResultList(input) {
		var results = new Array();
		for (var i=1; i<=input.max; i++) {
			results.push(fizzBuzz(i, input.fizz, input.buzz));
		}
		return results;
	}
	function fizzBuzz(number, fizz, buzz) {
		var result = new Result();
		result.fizz = number % fizz === 0;
		result.buzz = number % buzz === 0;
		result.number = number;
		return result;
	}
	function Input(str) {
		var arr = str.split(/\s+/);
		this.fizz = arr[0];
		this.buzz = arr[1];
		this.max = arr[2];
	}
	function Result() {
		this.fizz = false;
		this.buzz = false;
		this.number = -1;
		this.toString = function() {
			return (this.fizz ? 'F' : '') + (this.buzz ? 'B' : '') + (!this.fizz && !this.buzz ? this.number : '');
		}
	}
}

module.exports = Code;

var fs = require("fs");
var lineList = fs.readFileSync(process.argv[2]).toString().match(/[^\r\n]+/g);
console.log(new Code().execute(lineList));
