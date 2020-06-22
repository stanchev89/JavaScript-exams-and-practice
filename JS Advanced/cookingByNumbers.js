function solve(input) {
	let actions = {
		number: Number(input.shift()),
		chop: () => {
			actions.number /= 2;
			return console.log(actions.number);
		},
		dice: () => {
			actions.number = Math.sqrt(actions.number);
			return console.log(actions.number);
		},
		spice: () => {
			actions.number += 1;
			return console.log(actions.number);
		},
		bake: () => {
			actions.number *= 3;
			return console.log(actions.number);
		},
		fillet: () => {
			actions.number -= actions.number * 0.2;
			return console.log(actions.number);
		}
	};
	for (const line of input) {
		actions[line]();
	}
}
solve([ '32', 'chop', 'chop', 'chop', 'chop', 'chop' ]);
