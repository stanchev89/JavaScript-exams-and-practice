function solve(arr) {
	let merge = [].concat.apply([], arr);
	console.log(merge.sort((a, b) => b - a)[0]);
}
solve([ [ 20, 50, 10 ], [ 8, 33, 145 ] ]);
