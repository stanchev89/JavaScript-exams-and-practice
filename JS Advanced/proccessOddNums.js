function solve(input) {
	let output = [];
	for (let i = 1; i < input.length; i += 2) {
		output.push(input[i] * 2);
	}
	output = output.reverse();
	console.log(output.join(' '));
}
solve([ 10, 15, 20, 25 ]);
