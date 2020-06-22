function solve(input) {
	let words = input.match(/\w+/g);
	let output = [];
	words.forEach((word) => {
		output.push(word.toUpperCase());
	});
	console.log(output.join(', '));
}
solve('Hello');
