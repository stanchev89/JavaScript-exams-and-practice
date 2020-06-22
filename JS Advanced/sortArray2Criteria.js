function solve(arr) {
	const result = arr.sort((a, b) => {
		return a.length - b.length || a[0].charCodeAt() - b[0].charCodeAt();
	});
	console.log(result.join('\n'));
}
solve([ 'alpha', 'beta', 'gamma' ]);

solve([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ]);

solve([ 'test', 'Deny', 'omen', 'Default' ]);
