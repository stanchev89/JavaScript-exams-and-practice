function solve(input) {
	let step = parseInt(input.pop());
	input.map(function(el, index) {
		if (index % step === 0) {
			console.log(el);
		}
		index += step;
	});
}
solve([ 'dsa', 'asd', 'test', 'tset', '2' ]);
