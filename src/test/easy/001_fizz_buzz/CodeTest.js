var fs = require("fs");
var chai = require('chai');
var expect = chai.expect; 
var Code = require('./../../../main/easy/001_fizz_buzz/Code');
const FOLDER_PATH = 'src/test/easy/001_fizz_buzz/';

describe('Code', function() {
	it('input should be equal to output', function() {
		var expected = toList(FOLDER_PATH + 'output').join('\n');
		var actual = new Code().execute(toList(FOLDER_PATH + 'input'))
		expect(actual).to.equal(expected);
	});
});

function toList(filePath) {
	var lineList = new Array();
	fs.readFileSync(filePath).toString().split('\n').forEach(function(line) {
		if (line.trim() !== '') {
			lineList.push(line.trim());
		}
	});
	return lineList;
}