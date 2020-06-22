function solve(steps, footPrint, speedKmH) {
	let distance = steps * footPrint;
	let breakTime = Math.trunc(distance / 500);
	distance /= 1000;
	let time = distance / speedKmH;
	let hours = 0;
	let mins = time * 60 + breakTime;
	while (mins >= 60) {
		mins -= 60;
		hours++;
	}
	let seconds = Math.ceil((mins * 60) % 60);
	while (seconds >= 60) {
		seconds -= 60;
		mins++;
	}
	mins = Math.trunc(mins);

	if (hours < 10) {
		hours = `0${hours}`;
	}
	if (mins < 10) {
		mins = `0${mins}`;
	}
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	console.log(`${hours}:${mins}:${seconds}`);
}
solve(2564, 0.7, 1.7);
