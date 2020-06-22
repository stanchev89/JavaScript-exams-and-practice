function solve(moves) {
	let dashboard = [ [ false, false, false ], [ false, false, false ], [ false, false, false ] ];
	for (let i = 0; i < moves.length; i++) {
		let curPosition = moves[i].split(' ').map(Number);
		if (dashboard[curPosition[0]][curPosition[1]] !== false) {
			console.log('This place is already taken. Please choose another!');
			moves.splice(i, 1);
			i--;
			continue;
		}
		let player = '';
		i % 2 === 0 ? (player = 'X') : (player = 'O');
		dashboard[curPosition[0]][curPosition[1]] = player;
		if (checkForWinner(dashboard)) {
			console.log(`Player ${player} wins!`);
			break;
		}
		if (!dashboard[0].includes(false) && !dashboard[1].includes(false) && !dashboard[2].includes(false)) {
			console.log('The game ended! Nobody wins :(');
			break;
		}
	}

	for (const line of dashboard) {
		console.log(line.join('\t'));
	}

	function checkForWinner(arr) {
		const rightDiagonal = [ arr[0][0], arr[1][1], arr[2][2] ];
		const leftDiagonal = [ arr[0][2], arr[1][1], arr[2][0] ];
		if (isLineWin(rightDiagonal, leftDiagonal)) {
			return true;
		}
		for (let i = 0; i < 3; i++) {
			let curRow = [];
			let curCol = [];
			for (let x = 2; x >= 0; x--) {
				curRow.push(arr[i][x]);
				curCol.push(arr[x][i]);
			}
			if (isLineWin(curRow, curCol)) {
				return true;
			}
		}
	}

	function isLineWin(...arr) {
		let isWin = false;
		for (let i = 0; i < arr.length; i++) {
			let char = arr[i][0];
			if (char !== false) {
				isWin = arr[i].every((el) => el === char);
			}
			if (isWin) {
				return isWin;
			}
		}
		return isWin;
	}
}
//solve([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0' ]);
solve([ '0 2', '0 0', '1 1', '1 1', '1 2', '2 0', '2 2', '1 2', '2 2', '2 1' ]);
//solve([ '0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0', '2 0' ]);
//solve([ '0 0', '0 1', '0 2', '1 0', '1 1', '1 2', '2 1', '2 0', '2 2', '1 0' ]);
