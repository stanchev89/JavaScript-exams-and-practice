function solve(arr) {
	const output = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			output.push(arr[i]);
		}
	}
	console.log(output.join(' '));
}
solve([ '20', '30', '40' ]);
