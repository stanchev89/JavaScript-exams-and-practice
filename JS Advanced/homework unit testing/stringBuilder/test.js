const StringBuilder = require("./solution");
const expect = require("chai").expect;
describe("Unit test", function() {
	describe("class happy path", function() {
		let instance1, instance2;
		beforeEach(() => {
			instance1 = new StringBuilder("my name");
			instance2 = new StringBuilder();
		});
		it("should return initial class string argument", () => {
			expect(instance1.toString()).to.equal("my name");
			expect(instance2.toString()).to.equal("");
		});
		describe("append method", function() {
			it('should be "my name is Svetlin Nakov"', () => {
				instance1.append(" is Svetlin Nakov");
				expect(instance1.toString()).to.equal("my name is Svetlin Nakov");
			});
			it('should be "hello"', () => {
				instance2.append("hello");
				expect(instance2.toString()).to.equal("hello");
			});
		});

		describe("prepend method", function() {
			it('should be "guess my name"', () => {
				instance1.prepend("guess ");
				expect(instance1.toString()).to.equal("guess my name");
			});
			it('should be "I love this game"', () => {
				instance2.prepend("I love this game");
				expect(instance2.toString()).to.equal("I love this game");
			});
		});

		describe("insertAt method", function() {
			it('should be "my Username"', () => {
				instance1.insertAt("User", 3);
				expect(instance1.toString()).to.equal("my Username");
			});
			it('should be "it works"', () => {
				instance2.insertAt("it works", 0);
				expect(instance2.toString()).to.equal("it works");
			});
		});

		describe("remove method", function() {
			it('should be "mame"', () => {
				instance1.remove(1, 3);
				expect(instance1.toString()).to.equal("mame");
			});
			it('should be ""', () => {
				instance2.remove(1, 2);
				expect(instance2.toString()).to.equal("");
			});
		});
	});

	describe("test instance of class and class prototype", function() {
		const myClass = new StringBuilder("check instance");
		const emptyClass = new StringBuilder();
		it("should return true", () => {
			expect(myClass.constructor.name === "StringBuilder").to.true;
			expect(emptyClass.constructor.name === "StringBuilder").to.true;
		});
		it("should return true", () => {
			expect(typeof myClass.append === "function").to.true;
			expect(typeof emptyClass.append === "function").to.true;
		});
		it("should return true", () => {
			expect(typeof myClass.prepend === "function").to.true;
			expect(typeof emptyClass.prepend === "function").to.true;
		});
		it("should return true", () => {
			expect(typeof myClass.insertAt === "function").to.true;
			expect(typeof emptyClass.insertAt === "function").to.true;
		});
		it("should return true", () => {
			expect(typeof myClass.remove === "function").to.true;
			expect(typeof emptyClass.remove === "function").to.true;
		});
		it("should return true", () => {
			expect(typeof myClass.toString === "function").to.true;
			expect(typeof emptyClass.toString === "function").to.true;
		});
		it("should initialize _stringArray", function() {
			expect(Array.isArray(myClass._stringArray)).to.true;
			expect(myClass._stringArray.length).to.equal(14);
			expect(Array.isArray(emptyClass._stringArray)).to.true;
			expect(emptyClass._stringArray.length).to.equal(0);
		});
	});

	describe("tests with invalid parameters", function() {
		it("should return TypeError to create class instance with invalid parameters", () => {
			expect(() => new StringBuilder(5)).to.throw(TypeError, "Argument must be string");
		});
		it("should return TypeError to create class instance with invalid parameters", () => {
			expect(() => new StringBuilder(null)).to.throw(TypeError, "Argument must be string");
		});
		it("should return TypeError to create class instance with invalid parameters", () => {
			expect(() => new StringBuilder({ name: "Stefan" })).to.throw(TypeError, "Argument must be string");
		});

		let myClass;
		beforeEach(() => {
			myClass = new StringBuilder("test");
		});
		describe('test "prepend" method', function() {
			it("should return TypeError", () => {
				expect(() => {
					myClass.prepend(3);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.prepend([]);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.prepend({ name: "Ivo" });
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.prepend(null);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should prepend correctly", () => {
				let str = "My ";
				myClass.prepend(str);
				compareArray(myClass._stringArray, Array.from(str + "test"));
			});
		});

		describe('test "append" method', function() {
			it("should return TypeError", () => {
				expect(() => {
					myClass.append(5);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.append([ "string" ]);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.append({});
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should append correctly", () => {
				let str = " is correct";
				myClass.append(str);
				compareArray(myClass._stringArray, Array.from("test" + str));
			});
		});
		describe('test "insertAt" method', function() {
			it("should return TypeError", () => {
				expect(() => {
					myClass.insertAt(5, 3);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.insertAt([ "string" ], 0);
				}).to.throw(TypeError, "Argument must be string");
			});
			it("should return TypeError", () => {
				expect(() => {
					myClass.insertAt(null, 2);
				}).to.throw(TypeError, "Argument must be string");
			});

			it("should inserts correctly", function() {
				let str = "My class";
				myClass.insertAt(str, 2);
				let expected = Array.from("test");
				expected.splice(2, 0, ...str);
				compareArray(myClass._stringArray, expected);
			});
		});

		describe('test "remove" method', function() {
			it("should remove correctly", () => {
				myClass.remove(1, 2);
				compareArray(myClass._stringArray, Array.from("tt"));
			});
		});
		describe('"to string" works correctly', function() {
			it('should return "test"', () => {
				expect(myClass.toString()).to.equal("test");
			});
		});
	});

	function compareArray(source, expected) {
		expect(source.length).to.equal(expected.length, "Arrays don't match");
		for (let i = 0; i < source.length; i++) {
			expect(source[i]).to.equal(expected[i], "Element " + i + " mismatch");
		}
	}
});
