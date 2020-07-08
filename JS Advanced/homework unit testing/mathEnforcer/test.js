const mathEnforcer = require("./solution");
const expect = require("chai").expect;
describe("Unit testing", function() {
	describe("addFIve", function() {
		describe("happy path to addFive method", function() {
			it("should return 10", () => {
				expect(mathEnforcer.addFive(5)).to.equal(10);
			});
			it("should return 1", () => {
				expect(mathEnforcer.addFive(-4)).to.equal(1);
			});
			it("should return NaN", () => {
				expect(mathEnforcer.addFive(NaN)).to.NaN;
			});
			it("should return 5.5", () => {
				expect(mathEnforcer.addFive(0.49323451223)).to.be.closeTo(5.5, 0.1);
			});
			it("should return -6", () => {
				expect(mathEnforcer.addFive(-11.00001234)).to.be.closeTo(-6, 0.1);
			});
		});
		describe("invalid parameters to addFive method", function() {
			it("should return undefined", () => {
				expect(mathEnforcer.addFive("5")).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.addFive(null)).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.addFive([ 5 ])).to.equal(undefined);
			});
		});
	});

	describe("subtractTen", function() {
		describe("happy path to subtractTen method", function() {
			it("should return -9", () => {
				expect(mathEnforcer.subtractTen(1)).to.equal(-9);
			});
			it("should return 10", () => {
				expect(mathEnforcer.subtractTen(20)).to.equal(10);
			});
			it("should return NaN", () => {
				expect(mathEnforcer.subtractTen(NaN)).to.NaN;
			});
			it("should return 10.5", () => {
				expect(mathEnforcer.subtractTen(20.49323451223)).to.be.closeTo(10.5, 0.1);
			});
			it("should return -20", () => {
				expect(mathEnforcer.subtractTen(-10.009323451223)).to.be.closeTo(-20, 0.1);
			});
		});
		describe("invalid parameters to subtractTen method", function() {
			it("should return undefined", () => {
				expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
			});

			it("should return undefined", () => {
				expect(mathEnforcer.subtractTen({ number: 5 })).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
			});
		});
	});

	describe("sum", function() {
		describe("happy path to sum method", function() {
			it("should return 7", () => {
				expect(mathEnforcer.sum(3.5000000123, 3.500000155555)).to.be.closeTo(7, 0.1);
			});
			it("should return 7", () => {
				expect(mathEnforcer.sum(3.500000001245111, -4)).to.be.closeTo(-0.5, 0.1);
			});
			it("should return 3", () => {
				expect(mathEnforcer.sum(8, -5)).to.equal(3);
			});
			it("should return 3", () => {
				expect(mathEnforcer.sum(-5, 8)).to.equal(3);
			});

			it("should return 10", () => {
				expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
			});
			it("should return NaN", () => {
				expect(mathEnforcer.sum(NaN, 5)).to.NaN;
			});
			it("should return NaN", () => {
				expect(mathEnforcer.sum(5, NaN)).to.NaN;
			});
			it("should return -5.5", () => {
				expect(mathEnforcer.sum(-2.99999912324915, -2.499999123125125)).to.be.closeTo(-5.5, 0.1);
			});
			it("should return 22", () => {
				expect(mathEnforcer.sum(11.00000124123, 10.991492315)).to.be.closeTo(22, 0.1);
			});
		});
		describe("invalid parameters to sum method", function() {
			it("should return undefined", () => {
				expect(mathEnforcer.sum(50, "5")).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.sum(50, null)).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.sum(50, [ 1 ])).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.sum(50, { number: 1 })).to.equal(undefined);
			});

			it("should return undefined", () => {
				expect(mathEnforcer.sum(null, -5)).to.equal(undefined);
			});

			it("should return undefined", () => {
				expect(mathEnforcer.sum("1", 0)).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.sum([ 4 ], -5)).to.equal(undefined);
			});
			it("should return undefined", () => {
				expect(mathEnforcer.sum({ number: 3 }, -5)).to.equal(undefined);
			});
		});
	});
});
