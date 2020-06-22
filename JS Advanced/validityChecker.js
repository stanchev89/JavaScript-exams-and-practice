function solve([ x1, y1, x2, y2 ]) {
	let distance = findDistance(x1, y1, 0, 0);
	distance === parseInt(distance)
		? console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`)
		: console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
	distance = findDistance(x2, y2, 0, 0);
	distance === parseInt(distance)
		? console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`)
		: console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
	distance = findDistance(x1, y1, x2, y2);
	distance === parseInt(distance)
		? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
		: console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

	function findDistance(...args) {
		let [ x1, y1, x2, y2 ] = args;
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	}
}
solve([ 2, 1, 1, 1 ]);
