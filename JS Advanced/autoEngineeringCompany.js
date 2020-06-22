function solve(input) {
	let carsRegister = {};
	for (const line of input) {
		let [ brand, model, count ] = line.split(' | ');
		count = Number(count);
		if (carsRegister.hasOwnProperty(brand)) {
			if (carsRegister[brand].has(model)) {
				carsRegister[brand].set(model, carsRegister[brand].get(model) + count);
			} else {
				carsRegister[brand].set(model, count);
			}
		} else {
			carsRegister[brand] = new Map();
			carsRegister[brand].set(model, count);
		}
	}

	for (const brand in carsRegister) {
		console.log(brand);
		let [ ...models ] = carsRegister[brand].entries();
		models.map((model) => {
			console.log(`###${model[0]} -> ${model[1]}`);
		});
	}
}

solve([
	'Audi | Q7 | 1000',
	'Audi | Q6 | 100',
	'BMW | X5 | 1000',
	'BMW | X6 | 100',
	'Citroen | C4 | 123',
	'Volga | GAZ-24 | 1000000',
	'Lada | Niva | 1000000',
	'Lada | Jigula | 1000000',
	'Citroen | C4 | 22',
	'Citroen | C5 | 10'
]);
