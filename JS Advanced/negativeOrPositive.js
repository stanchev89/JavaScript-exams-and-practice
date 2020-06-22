function solve(arr) {
	const output = [];
	arr.forEach((element) => {
		element < 0 ? output.unshift(element) : output.push(element);
	});

	for (const num of output) {
		console.log(num);
	}
}
solve([ 3, -2, 0, -1 ]);
