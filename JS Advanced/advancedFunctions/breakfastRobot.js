function data() {
	const microelements = {
		protein: 0,
		carbohydrate: 0,
		fat: 0,
		flavour: 0
	};

	const receips = {
		apple: { carbohydrate: 1, flavour: 2 },
		lemonade: { carbohydrate: 10, flavour: 20 },
		burger: { carbohydrate: 5, fat: 7, flavour: 3 },
		eggs: { protein: 5, fat: 1, flavour: 1 },
		turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
	};
	const operations = {
		report: () => {
			const toPrint = [];
			for (const key in microelements) {
				toPrint.push(`${key}=${microelements[key]}`);
			}
			return toPrint.join(" ");
		},

		restock: (element, quantity) => {
			microelements[element] += Number(quantity);
			return `Success`;
		},

		prepare: (product, quantity) => {
			const result = isAvailibleElements(quantity, receips[product], microelements);
			if (result.length === 0) {
				return "Success";
			}

			return `Error: not enough ${result[1]} in stock`;
		}
	};

	function isAvailibleElements(quantity, product, elements) {
		let isAvalilble = [];
		for (let i = 0; i < Number(quantity); i++) {
			for (const needElement in product) {
				if (elements[needElement] - product[needElement] < 0) {
					isAvalilble[0] = false;
					isAvalilble[1] = needElement;
					return isAvalilble;
				}
				elements[needElement] -= product[needElement];
			}
		}
		return isAvalilble;
	}

	return function solve(input) {
		const args = input.slice().split(" ");
		const action = args.shift();
		return operations[action](...args);
	};
}

const test = data();
console.log(test("restock flavour 50"));
console.log(test("prepare lemonade 4"));
