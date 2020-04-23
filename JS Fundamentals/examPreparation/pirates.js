function pirates(input) {
	let targCities = {};
	let isSailed = false;
	for (const line of input) {
		if (!isSailed) {
			if (line !== 'Sail') {
				putTargCities(targCities, line);
			} else {
				isSailed = true;
			}
		} else if (line !== 'End') {
			actions(targCities, line);
		} else {
			let length = Object.keys(targCities).length;
			console.log(`Ahoy, Captain! There are ${length} wealthy settlements to go to:`);
			Object.keys(targCities).sort(sorting).forEach((town) => {
				console.log(
					`${town} -> Population: ${targCities[town]['population']} citizens, Gold: ${targCities[town][
						'gold'
					]} kg`
				);
			});
		}
	}

	function sorting(a, b) {
		let criteria1 = targCities[b]['gold'] - targCities[a]['gold'];
		let criteria2 = a.localeCompare(b);
		if (criteria1) {
			return criteria1;
		}
		return criteria2;
	}

	function putTargCities(targCities, data) {
		let sortData = data.split('||');
		let town = sortData.shift();
		let [ population, gold ] = sortData.map(Number);
		if (targCities.hasOwnProperty(town)) {
			targCities[town]['population'] += population;
			targCities[town]['gold'] += gold;
			return;
		}
		targCities[town] = { population: population, gold: gold };
		return;
	}

	function actions(targCities, data) {
		data = data.split('=>');
		let action = data.shift();
		if (action == 'Plunder') {
			plunder(targCities, data);
		} else if (action == 'Prosper') {
			prosper(targCities, data);
		}
	}

	function plunder(targCities, [ town, people, gold ]) {
		people = Number(people);
		gold = Number(gold);
		if (targCities.hasOwnProperty(town)) {
			targCities[town]['population'] -= people;
			targCities[town]['gold'] -= gold;
			console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

			if (targCities[town]['population'] <= 0 || targCities[town]['gold'] <= 0) {
				delete targCities[town];
				return console.log(`${town} has been wiped off the map!`);
			}
		}
		return;
	}

	function prosper(targCities, [ town, gold ]) {
		gold = Number(gold);
		if (gold < 0) {
			// or <= 0
			return console.log('Gold added cannot be a negative number!');
		}
		targCities[town]['gold'] += gold;
		return console.log(
			`${gold} gold added to the city treasury. ${town} now has ${targCities[town]['gold']} gold.`
		);
	}
}

pirates([
	'Nassau||95000||1000',
	'San Juan||930000||1250',
	'Campeche||270000||690',
	'Port Royal||320000||1000',
	'Port Royal||100000||2000',
	'Sail',
	'Prosper=>Port Royal=>-200',
	'Plunder=>Nassau=>94000=>750',
	'Plunder=>Nassau=>1000=>150',
	'Plunder=>Campeche=>150000=>690',
	'End'
]);
