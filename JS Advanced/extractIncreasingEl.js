function solve(arr) {
	arr.reduce((acc, curr) => {
		if (acc <= curr) {
			acc = curr;
			console.log(curr);
		}
		return acc;
	}, Number.MIN_SAFE_INTEGER);
}
//solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]);
solve([ 20, 3, 2, 15, 6, 1 ]);
