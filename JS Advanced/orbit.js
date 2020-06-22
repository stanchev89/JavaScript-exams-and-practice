// function solve([ width, height, x, y ]) {
// 	let area = [];
// 	for (let i = 0; i < height; i++) {
// 		area.push([]);
// 		for (let x = 0; x < width; x++) {
// 			area[i].push('');
// 		}
// 	}
// 	let result = fillTheMatrix(area, x, y);

// 	for (const line of result) {
// 		console.log(line.join(' '));
// 	}

// 	function fillTheMatrix(arr, x, y) {
// 		let matrix = arr;
// 		for (let row = 0; row < arr.length; row++) {
// 			for (let col = 0; col < arr[0].length; col++) {
// 				arr[row][col] = Math.floor(distanceBetweenPoints(x, y, row, col));
// 			}
//         }

// 		return matrix;
// 	}

// 	function distanceBetweenPoints(x1, y1, x2, y2) {
// 		return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) + 1;
// 	}
// }

function solve([ rows, cols, starRow, starCol ]) {
	let matrix = [];
	for (let row = 0; row < rows; row++) {
		matrix.push([]);
		for (let col = 0; col < cols; col++) {
			matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
		}
	}
	console.log(matrix.map((row) => row.join(' ')).join('\n'));
}
solve([ 4, 4, 0, 0 ]);
console.log('-----------------------');

solve([ 5, 5, 2, 2 ]);
console.log('-----------------------');
solve([ 3, 3, 2, 2 ]);
