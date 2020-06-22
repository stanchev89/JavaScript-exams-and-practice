function solve(input) {
	if (typeof input !== 'number') {
		input = 5;
	}
	for (let i = 0; i < input; i++) {
		let result = '';
		for (let x = 0; x < input; x++) {
			result += '* ';
		}
		console.log(result);
	}
}
solve();
