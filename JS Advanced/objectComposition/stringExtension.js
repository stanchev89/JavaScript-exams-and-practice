(function solution() {
	const myProps = {
		ensureStart(str) {
			if (this.startsWith(str)) {
				return this.toString();
			}
			return str + this;
		},
		ensureEnd(str) {
			if (this.endsWith(str)) {
				return this.toString();
			}
			return this + str;
		},
		isEmpty() {
			return this.toString() === "";
		},
		truncate(n) {
			if (n < 4) {
				return "...".slice(0, n);
			}
			if (this.length <= n) {
				return this.toString();
			}
			if (!this.includes(" ")) {
				const wordLength = n - 3;
				return this.slice(0, wordLength) + "...";
			}
			return (
				this.split(" ")
					.reduce((acc, word, index, arr) => {
						if (acc.join("").length + word.length <= n - 3) {
							if (index > 0) {
								acc.push(" ");
							}
							acc.push(word);
						} else {
							arr.splice(1);
						}

						return acc;
					}, [])
					.join("") + "..."
			);
		}
	};

	String.format = function(string, ...params) {
		const placeHolders = string.match(/{(\d+)}/g);
		placeHolders.forEach((element) => {
			const index = Number(element[1]);
			if (params[index] !== undefined) {
				string = string.replace(element, params[index]);
			}
		});
		return string;
	};

	for (const prop in myProps) {
		String.prototype[prop] = myProps[prop];
	}

	// var testString = "the {0} brown {1} jumps over the {2} dog";
	// console.log(String.format("the {0} brown {1} jumps over the {2} dog", "stef"));
})();

function test(string, ...params) {
	const placeHolders = string.match(/{(\d+)}/g);
}
test("The {0} {1} fox", "little", "sweet");
