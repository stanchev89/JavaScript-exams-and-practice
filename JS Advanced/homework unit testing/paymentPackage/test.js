const PaymentPackage = require("./solution");
const assert = require("chai").assert;

describe("Testing Payment Package class", function() {
	let actualResult;
	let expectedResult;
	let paymentPackage;

	beforeEach(() => {
		actualResult = null;
		expectedResult = null;
		paymentPackage = new PaymentPackage("Consultation", 800);
	});

	describe("constructor check", () => {
		it("with valid params is correctly set", () => {
			actualResult = paymentPackage;
			assert.equal(actualResult.name, "Consultation");
			assert.equal(actualResult.value, 800);
			assert.equal(actualResult.VAT, 20);
			assert.equal(actualResult.active, true);
		});
		it("with valid params", () => {
			assert.instanceOf(paymentPackage, PaymentPackage);
			assert.doesNotThrow(() => new PaymentPackage("Consultation", 800));
		});
		it("with invalid params- empty string", () => {
			actualResult = () => new PaymentPackage("", 800);
			expectedResult = "Name must be a non-empty string";
			assert.throw(actualResult, expectedResult);
		});
		it("with invalid params- non-string type", () => {
			actualResult = () => new PaymentPackage(true, 800);
			expectedResult = "Name must be a non-empty string";
			assert.throw(actualResult, expectedResult);
		});
		it("with invalid params- negative number", () => {
			actualResult = () => new PaymentPackage("Consultation", -800);
			expectedResult = "Value must be a non-negative number";
			assert.throw(actualResult, expectedResult);
		});
		it("with invalid params- non-number type", () => {
			actualResult = () => new PaymentPackage("Consultation", "800");
			expectedResult = "Value must be a non-negative number";
			assert.throw(actualResult, expectedResult);
		});
	});

	describe("get name() function check", () => {
		it("returning correct name", () => {
			actualResult = paymentPackage.name;
			expectedResult = "Consultation";
			assert.equal(actualResult, expectedResult, "Getter should have returned Consultation as output");
		});
	});
	describe("get value() function check", () => {
		it("returning correct value", () => {
			actualResult = paymentPackage.value;
			expectedResult = 800;
			assert.equal(actualResult, expectedResult, "Getter should have returned 800 as output");
		});
	});
	describe("get VAT() function check", () => {
		it("returning correct VAT", () => {
			actualResult = paymentPackage.VAT;
			expectedResult = 20;
			assert.equal(actualResult, expectedResult, "Getter should have returned 20 as output");
		});
	});
	describe("get active() function check", () => {
		it("returning correct active", () => {
			actualResult = paymentPackage.active;
			expectedResult = true;
			assert.equal(actualResult, expectedResult, "Getter should have returned true as output");
		});
	});
	describe("set name() function check", () => {
		it("returning correct name", () => {
			paymentPackage.name = "HR Services";
			actualResult = paymentPackage.name;
			expectedResult = "HR Services";
			assert.equal(actualResult, expectedResult, "Setter should have set HR Services as name");
			paymentPackage.name = "Management";
			actualResult = paymentPackage.name;
			expectedResult = "Management";
			assert.equal(actualResult, expectedResult, "Setter should have set Management as name");
		});
		it("with invalid param- empty string", () => {
			actualResult = () => (paymentPackage.name = "");
			expectedResult = "Name must be a non-empty string";
			assert.throw(actualResult, expectedResult);
		});
		it("with invalid param- non-string type", () => {
			actualResult = () => (paymentPackage.name = true);
			expectedResult = "Name must be a non-empty string";
			assert.throw(actualResult, expectedResult);
		});
	});
	describe("set value() function check", () => {
		it("returning correct value", () => {
			paymentPackage.value = 600;
			actualResult = paymentPackage.value;
			expectedResult = 600;
			assert.equal(actualResult, expectedResult, "Setter should have set 600 as value");
			paymentPackage.value = 400;
			actualResult = paymentPackage.value;
			expectedResult = 400;
			assert.equal(actualResult, expectedResult, "Setter should have set 400 as value");
		});
		it("with invalid param- negative number", () => {
			actualResult = () => (paymentPackage.value = -800);
			expectedResult = "Value must be a non-negative number";
			assert.throw(actualResult, expectedResult);
		});
		it("with invalid param- non-number type", () => {
			actualResult = () => (paymentPackage.value = "800");
			expectedResult = "Value must be a non-negative number";
			assert.throw(actualResult, expectedResult);
		});
	});
	describe("set VAT() function check", () => {
		it("returning correct VAT", () => {
			paymentPackage.VAT = 30;
			actualResult = paymentPackage.VAT;
			expectedResult = 30;
			assert.equal(actualResult, expectedResult, "Setter should have set 30 as VAT");
			paymentPackage.VAT = 25;
			actualResult = paymentPackage.VAT;
			expectedResult = 25;
			assert.equal(actualResult, expectedResult, "Setter should have set 25 as VAT");
		});
		it("with invalid param - non-Number case", () => {
			actualResult = () => (paymentPackage.VAT = true);
			expectedResult = "VAT must be a non-negative number";
			assert.throw(actualResult, expectedResult);
		});
		it("with invalid param - negative Number case", () => {
			actualResult = () => (paymentPackage.VAT = -25);
			expectedResult = "VAT must be a non-negative number";
			assert.throw(actualResult, expectedResult);
		});
	});
	describe("set active() function check", () => {
		it("returning correct active", () => {
			paymentPackage.active = false;
			actualResult = paymentPackage.active;
			expectedResult = false;
			assert.equal(actualResult, expectedResult, "Setter should have set active field as false");
			paymentPackage.active = true;
			actualResult = paymentPackage.active;
			expectedResult = true;
			assert.equal(actualResult, expectedResult, "Setter should have set active field as true");
		});
		it("with invalid param - non-Boolean case", () => {
			actualResult = () => (paymentPackage.active = "false");
			expectedResult = "Active status must be a boolean";
			assert.throw(actualResult, expectedResult);
		});
	});

	describe("toString() function check", () => {
		it("returning correct output with active status", () => {
			actualResult = paymentPackage.toString();
			expectedResult = `Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960`;
			assert.equal(actualResult, expectedResult, "The string outputs do not match");
		});
		it("returning correct output with inactive status", () => {
			paymentPackage.active = false;
			actualResult = paymentPackage.toString();
			expectedResult = `Package: Consultation (inactive)\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960`;
			assert.equal(actualResult, expectedResult, "The string outputs do not match");
		});
	});
});
