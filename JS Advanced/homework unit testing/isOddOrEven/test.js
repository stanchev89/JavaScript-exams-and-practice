const isOddOrEven = require("./solution");
const expect = require("chai").expect;
describe("Unit testing", function() {
	const validEvenParameter = "solo";
	const validOddParameter = "probe";
	describe("check with invalid parameters", () => {
		it("should return undefined with a number as parameter", function() {
			expect(isOddOrEven(5)).to.equal(undefined);
		});
		it("should return undefined with an object as parameter", function() {
			expect(isOddOrEven({ name: validEvenParameter })).to.equal(undefined);
		});
		it("should return undefined with a null as parameter", function() {
			expect(isOddOrEven(null)).to.equal(undefined);
		});
	});

	describe("check with valid arguments", () => {
		it("should return correct string length - even", function() {
			expect(isOddOrEven(validOddParameter)).to.equal("odd");
		});
		it("should return correct string length - odd", function() {
			expect(isOddOrEven(validEvenParameter)).to.equal("even");
		});
		it('should return "even" with an empty string parameter', function() {
			expect(isOddOrEven("")).to.equal("even");
		});
	});
});
