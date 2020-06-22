class Hex {
	constructor(val) {
		this.value = Number(val);
	}

	valueOf() {
		return this.value;
	}

	toString() {
		const hexString = this.value.toString(16);
		return "0x" + hexString.toLocaleUpperCase();
	}

	plus(adder) {
		return new Hex(this.value + adder);
	}

	minus(subs) {
		return new Hex(this.value - subs);
	}

	parse(toParse) {
		return parseInt(Number(toParse), 10);
	}
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(100);
let b = new Hex(50);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
const test = 5;
console.log(FF.parse(test));
