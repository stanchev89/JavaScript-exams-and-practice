function solve(rows, colls) {
	const spiral = [];

	for (let i = 0; i < rows; i++) {
		spiral.push(new Array(colls).fill(false));
	}

	console.log(fillSpiral(spiral).map((el) => el.join(' ')).join('\n'));

	function fillSpiral(arr) {
		let number = 1;
		let colCounter = 0;
		let rowCounter = 0;
		let countDown = false;
		while (number <= arr.length * arr[0].length) {
			for (let row = 0; row <= arr[0].length; row++) {
				if (arr[rowCounter][colCounter] === false) {
					arr[rowCounter][colCounter] = number;
					number++;
					countDown ? colCounter-- : colCounter++;
				} else {
					break;
				}
			}
			countDown ? colCounter++ : colCounter--;

			countDown ? rowCounter-- : rowCounter++;

			for (let col = 0; col < arr.length; col++) {
				if (arr[rowCounter][colCounter] === false) {
					arr[rowCounter][colCounter] = number;
					number++;
					countDown ? rowCounter-- : rowCounter++;
				} else {
					break;
				}
				if (arr[rowCounter] === undefined || arr[rowCounter][colCounter] !== false) {
					countDown ? rowCounter++ : rowCounter--;
					break;
				}
			}

			countDown = !countDown;

			countDown ? colCounter-- : colCounter++;
		}
		return arr;
	}
}
solve(5, 10);

// function spiralMatrix(rows, cols) {
// 	let matrix = [];
// 	for (let i = 0; i < rows; i++) {
// 		matrix.push([]);
// 	}
// 	let startRow = 0,
// 		startCol = 0,
// 		endRow = rows - 1,
// 		endCol = cols - 1;
// 	let number = 1;
// 	while (startRow <= endRow || startCol <= endCol) {
// 		for (let i = startCol; i <= endCol; i++) {
// 			matrix[startRow][i] = number++;
// 		}
// 		for (let i = startRow + 1; i <= endRow; i++) {
// 			matrix[i][endCol] = number++;
// 		}
// 		for (let i = endCol - 1; i >= startCol; i--) {
// 			matrix[endRow][i] = number++;
// 		}
// 		for (let i = endRow - 1; i > startRow; i--) {
// 			matrix[i][startCol] = number++;
// 		}
// 		startRow++;
// 		startCol++;
// 		endRow--;
// 		endCol--;
// 	}
// 	console.log(matrix.map((row) => row.join(' ')).join('\n'));
// }

// //spiralMatrix(12, 10);

// function spiralMatrix2(rows, cols) {
// 	let matrix = [];
// 	for (let i = 0; i < rows; i++) {
// 		matrix[i] = [];
// 	}
// 	let row = 0;
// 	let col = 0;
// 	let direction = 'right';
// 	let bottom = rows - 1;
// 	let top = 1;
// 	let left = 0;
// 	let right = cols - 1;
// 	matrix[0][0] = 1;
// 	for (let count = 2; count <= rows * cols; count++) {
// 		switch (direction) {
// 			case 'down':
// 				row++;
// 				matrix[row][col] = count;
// 				if (row == bottom) {
// 					direction = 'left';
// 					bottom--;
// 				}
// 				break;
// 			case 'right':
// 				col++;
// 				matrix[row][col] = count;
// 				if (col == right) {
// 					direction = 'down';
// 					right--;
// 				}
// 				break;
// 			case 'up':
// 				row--;
// 				matrix[row][col] = count;
// 				if (row == top) {
// 					direction = 'right';
// 					top++;
// 				}
// 				break;
// 			case 'left':
// 				col--;
// 				matrix[row][col] = count;
// 				if (col == left) {
// 					direction = 'up';
// 					left++;
// 				}
// 				break;
// 		}
// 	}
// 	console.log(matrix.map((row) => row.join(' ')).join('\n'));
// }

// spiralMatrix2(10, 10);
