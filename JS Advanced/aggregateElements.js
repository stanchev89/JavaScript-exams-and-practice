function solve(input) {
	console.log(input.reduce((acc, val) => acc + val));
	console.log(input.map((num) => (num = 1 / num)).reduce((acc, val) => acc + val));
	console.log(input.map((num) => (num = num.toString())).reduce((acc, val) => acc + val));
}
solve([ 2, 4, 8, 16 ]);
