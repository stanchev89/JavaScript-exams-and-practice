function solve(arr) {
	let isEqual = true;
	let sumTarget = arr[0].reduce((acc, cur) => acc + cur);

	for (let i = 0; i < arr.length; i++) {
		let colSum = 0;
		if (arr[i].reduce((acc, cur) => acc + cur) !== sumTarget) {
			isEqual = false;
			break;
		}
		for (let x = 0; x < arr.length; x++) {
			colSum += arr[x][i];
		}
		if (colSum !== sumTarget) {
			isEqual = false;
		}
	}
	console.log(isEqual);
}

solve([ [ 11, 32, 45 ], [ 21, 0, 1 ], [ 21, 1, 1 ] ]);

solve([ [ 1, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 0 ] ]);
