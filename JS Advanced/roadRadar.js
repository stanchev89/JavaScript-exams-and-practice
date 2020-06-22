function solve([ speed, area ]) {
	let limits = {
		motorway: 130,
		interstate: 90,
		city: 50,
		residential: 20
	};

	if (limits[area] < speed) {
		let diff = speed - limits[area];
		if (diff <= 40 && diff > 20) {
			console.log('excessive speeding');
		} else if (diff <= 20) {
			console.log('speeding');
		} else {
			console.log('reckless driving');
		}
	}
}
solve([ 21, 'residential' ]);
