const lookupChar = require("./solution");
const expect = require("chai").expect;
describe("my tests", function() {
	const validString = "User_Name ";
	describe("Happy path", function() {
		it("should return correct character at index position", function() {
			expect(lookupChar(validString, 0)).to.equal("U");
			expect(lookupChar(validString, 3)).to.equal("r");
			expect(lookupChar(validString, 4)).to.equal("_");
			expect(lookupChar(validString, 9)).to.equal(" ");
		});
	});

	describe("Testing with invalid parameters", function() {
		it("should return undefined with a non string parameter", function() {
			expect(lookupChar(5, 0)).to.equal(undefined);
			expect(lookupChar([], 0)).to.equal(undefined);
			expect(lookupChar(true, 0)).to.equal(undefined);
			expect(lookupChar(null, 0)).to.equal(undefined);
		});

		it("should return undefined with not an integer parameter for index", function() {
			expect(lookupChar(validString, "3")).to.equal(undefined);
			expect(lookupChar(validString, [ 1 ])).to.equal(undefined);
			expect(lookupChar(validString, "one")).to.equal(undefined);
			expect(lookupChar(validString, 3.5)).to.equal(undefined);
			expect(lookupChar(validString)).to.equal(undefined);
		});

		it('should return "Incorrect index" for index parameter out of the string length range', function() {
			expect(lookupChar(validString, -1)).to.equal("Incorrect index");
			expect(lookupChar(validString, 10)).to.equal("Incorrect index");
		});

		it('should return "Incorrect index" with empty string parameter and 0 index parameter', function() {
			expect(lookupChar("", 0)).to.equal("Incorrect index");
		});
	});
});
