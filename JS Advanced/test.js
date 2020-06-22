class Person {
	constructor(name, age, weight) {
		this.name = name;
		this.age = age;
		this._weight = null;
		this.weight = weight;
	}

	get weight() {
		return this._weight;
	}

	set weight(val) {
		if (typeof val !== "number") {
			throw TypeError("Invalid type");
		}
		this._weight = val;
	}
}

const myMan = new Person("Stefan", 31, 75);
console.log(myMan.weight);
