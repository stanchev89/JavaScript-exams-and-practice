function solve(input) {
	let countPairs = 0;
	for (let i = 0; i < input.length; i++) {
		for (let x = 0; x < input[0].length; x++) {
			if (input[i][x] === input[i][x + 1]) {
				countPairs++;
			}
			if (input[i + 1] !== undefined) {
				if (input[i][x] === input[i + 1][x]) {
					countPairs++;
				}
			}
		}
	}
	console.log(countPairs);
}
solve([ [ 'test', 'yes', 'yo', 'ho' ], [ 'well', 'done', 'yo', '6' ], [ 'not', 'done', 'yet', '5' ] ]);
