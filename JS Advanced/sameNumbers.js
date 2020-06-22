function solve(num) {
	let numString = num.toString().split('');
	let sameNums = numString.filter((n) => n === numString[0]);
	sameNums.length === numString.length ? console.log('true') : console.log('false');
	let sum = numString.map(Number).reduce((acc, val) => acc + val);
	console.log(sum);
}
solve(242222);
