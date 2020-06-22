function solve(input) {
	const juices = {};
	let bottles = [];
	for (const line of input) {
		let [ kind, quantity ] = line.split(' => ');
		quantity = Number(quantity);
		if (juices.hasOwnProperty(kind)) {
			juices[kind] += quantity;
		} else {
			juices[kind] = quantity;
		}

		if (juices[kind] >= 1000) {
			if (!bottles.includes(kind)) {
				bottles.push(kind);
			}
		}
	}
	bottles.map((juice) => {
		const quantity = Math.trunc(juices[juice] / 1000);
		return console.log(`${juice} => ${quantity}`);
	});
}
solve([ 'Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789' ]);
