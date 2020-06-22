function solve(input) {
	let [ right, left ] = calcSumDiagonals(input);
	console.log(`${right} ${left}`);
	function calcSumDiagonals(arr) {
		let sumRight = 0;
		let sumLeft = 0;
		let counter = arr.length - 1;
		for (let i = 0; i < arr.length; i++) {
			sumRight += arr[i][i];
			sumLeft += arr[i][counter];
			counter--;
		}
		return [ sumRight, sumLeft ];
	}
}
solve([ [ 20, 40 ], [ 10, 60 ] ]);
solve([ [ 3, 5, 17 ], [ -1, 7, 14 ], [ 1, -8, 89 ] ]);
