function solve(input) {
	let chars = new Set();
	const uniques = [];
	const catalogue = {};

	for (const line of input) {
		let [ product, price ] = line.split(' : ');
		price = Number(price);
		chars.add(product[0]);
		if (!uniques.includes(product.toLowerCase())) {
			uniques.push(product.toLowerCase());
			catalogue[product] = price;
		}
	}

	let sortedCatalogue = Object.keys(catalogue).sort();
	let sortedChars = Array.from(chars).sort();
	for (const char of sortedChars) {
		console.log(char);
		sortedCatalogue.map((product) => {
			if (product[0] === char) {
				console.log(`  ${product}: ${catalogue[product]} `);
			}
		});
	}
}
solve([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10'
]);
