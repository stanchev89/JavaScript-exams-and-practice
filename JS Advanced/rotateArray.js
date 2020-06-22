function solve(input) {
	const numRotates = Number(input.pop()) % input.length;
	function reArrange(arr) {
		const buffer = arr.pop();
		arr.unshift(buffer);
		return arr;
	}

	for (let i = 0; i < numRotates; i++) {
		reArrange(input);
	}
	console.log(input.join(' '));
}
solve([ 'Banana', 'Orange', 'Coconut', 'Apple', ' ', '6' ]);
solve([ '1', '5' ]);
