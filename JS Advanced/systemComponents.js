function solve(input) {
	const register = {};
	for (const line of input) {
		const [ system, component, subcomponent ] = line.split(' | ');
		if (register.hasOwnProperty(system)) {
			register[system].hasOwnProperty(component)
				? register[system][component].push([ subcomponent ])
				: (register[system][component] = [ subcomponent ]);
			continue;
		}

		register[system] = {
			[component]: [ subcomponent ]
		};
	}

	Object.keys(register)
		.sort((a, b) => {
			const lengthA = Object.keys(register[a]).length;
			const lengthB = Object.keys(register[b]).length;

			return lengthB - lengthA || a.localeCompare(b);
		})
		.forEach((comp) => {
			console.log(comp);
			Object.keys(register[comp])
				.sort((a, b) => {
					return register[comp][b].length - register[comp][a].length;
				})
				.forEach((subComp) => {
					console.log(`|||${subComp}`);
					register[comp][subComp].map((el) => console.log(`||||||${el}`));
				});
		});
}

solve([
	'SULS | Main Site | Home Page',
	'SULS | Main Site | Login Page',
	'SULS | Main Site | Register Page',
	'SULS | Judge Site | Login Page',
	'SULS | Judge Site | Submittion Page',
	'Lambda | CoreA | A23',
	'SULS | Digital Site | Login Page',
	'Lambda | CoreB | B24',
	'Lambda | CoreA | A24',
	'Lambda | CoreA | A25',
	'Lambda | CoreC | C4',
	'Indice | Session | Default Storage',
	'Indice | Session | Default Security'
]);
