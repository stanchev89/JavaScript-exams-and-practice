function carFactory(requirements) {
	const engines = {
		smallEngine: { power: 90, volume: 1800 },
		normalEngine: { power: 120, volume: 2400 },
		bigEngine: { power: 200, volume: 3500 }
	};

	function pickEngine(requirements, engines) {
		let biggerEngines = [];
		Object.keys(engines).map((typeEngine) => {
			if (engines[typeEngine].power >= requirements.power) {
				biggerEngines.push(engines[typeEngine].power);
			}
		});
		let correctEngine = {};
		for (const key in engines) {
			if (engines[key].power === biggerEngines[0]) {
				correctEngine = {
					power: engines[key].power,
					volume: engines[key].volume
				};
			}
		}
		return correctEngine;
	}

	function pickWheels(requiredWheelSize) {
		let transform = Math.trunc(requiredWheelSize);
		const availableSize = transform % 2 === 0 ? transform - 1 : transform;
		return [ availableSize, availableSize, availableSize, availableSize ];
	}

	return {
		model: `${requirements.model}`,
		engine: pickEngine(requirements, engines),
		carriage: { type: `${requirements.carriage}`, color: `${requirements.color}` },
		wheels: pickWheels(requirements.wheelsize)
	};
}
var test = {
	model: "VW Golf II",
	power: 90,
	color: "blue",
	carriage: "hatchback",
	wheelsize: 14
};
console.log(carFactory(test));
