function solve(nums, elements) {
	let counter = [ 1 ];
	console.log(1);

	for (let i = 0; i < nums - 1; i++) {
		let nextNum = 0;
		for (let x = elements - 1; x >= 0; x--) {
			let curNum = counter[i - x];
			if (curNum === undefined) {
				curNum = 0;
			}
			nextNum += curNum;
		}
		counter.push(nextNum);
		console.log(nextNum);
	}
}
solve(8, 2);
