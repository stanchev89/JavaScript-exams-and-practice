function solve(input) {
	let matrix = [];
	for (let line of input) {
		line = line.split(' ').map(Number);
		matrix.push(line);
	}
	let diagonals = diagonalSums(matrix);
	if (diagonals[0] === diagonals[1]) {
		matrix = fillTheRest(matrix, diagonals[0]);
	}

	for (const line of matrix) {
		console.log(line.join(' '));
	}

	function diagonalSums(arr) {
		let rightDiagonal = 0;
		let leftDiagonal = 0;
		let counter = arr.length - 1;
		for (let i = 0; i < arr.length; i++) {
			rightDiagonal += arr[i][i];
			leftDiagonal += arr[i][counter];
			counter--;
		}
		return [ rightDiagonal, leftDiagonal ];
	}

	function fillTheRest(arr, num) {
		let counter = arr.length - 1;
		for (let i = 0; i < arr.length; i++) {
			let buffer = arr[i][counter];
			for (let x = 0; x < arr.length; x++) {
				if (i !== x) {
					arr[i][x] = num;
				}
			}
			arr[i][counter] = buffer;
			counter--;
		}
		return arr;
	}
}
//solve([ '5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1' ]);
solve([ '1 1 1', '1 1 1', '1 1 0' ]);
