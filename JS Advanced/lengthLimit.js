function solve(input) {
	class Stringer {
		constructor(initialString, initialLength) {
			this.innerString = initialString;
			this.innerLength = initialLength;
			this.initialString = initialString;
		}

		increase(length) {
			this.innerLength += length;
			if (this.innerLength > this.initialString.length) {
				let firstPart = this.initialString;
				return (this.innerString = firstPart.concat('...'));
			}
			return (this.innerString = this.initialString.split('').slice(0, this.innerLength).join(''));
		}

		decrease(length) {
			this.innerLength -= length;
			if (this.innerLength < 0) {
				this.innerLength = 0;
				this.innerString = '...';
				return this.innerString;
			}

			return (this.innerString = this.initialString.slice(0, length).concat('...'));
		}

		toString() {
			return this.innerString;
		}
	}

	let test = new Stringer('Viktor', 6);
	console.log(test.innerString);
	console.log(test.decrease(3));
	console.log(test.toString());
}

solve();
