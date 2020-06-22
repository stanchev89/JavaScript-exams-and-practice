function solve(input) {
	const actions = {
		add: (arr, item) => arr.push(item),
		remove: (arr) => arr.pop()
	};
	const result = input.reduce((acc, curr, index) => {
		actions[curr](acc, index + 1);
		return acc;
	}, []);
	result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}
solve([ 'add', 'add', 'add', 'add' ]);
