function solve(input) {
	if (typeof input == 'number') {
		return console.log((Math.PI * Math.pow(input, 2)).toFixed(2));
	}
	console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
}
solve(undefined);
