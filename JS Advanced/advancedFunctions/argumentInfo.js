function argumentInfo(...args) {
	const argsTypeValues = new Map();
	[ ...args ].forEach((arg) => {
		const type = typeof arg;
		console.log(`${type}: ${arg}`);

		argsTypeValues.has(type) ? argsTypeValues.get(type).push(arg) : argsTypeValues.set(type, [ arg ]);
	});
	return (function output(argsTypeValues) {
		const toPrint = Array.from(argsTypeValues);
		toPrint.sort((a, b) => b[1].length - a[1].length);
		for (const type of toPrint) {
			console.log(`${type[0]} = ${type[1].length}`);
		}
	})(argsTypeValues);
}

//
// 	argumentInfo("cat", 42, function() {
// 		console.log("Hello world!");
// 	})
// ;

argumentInfo({ name: "bob" }, 3.333, 9.999);
