function solve(arr) {
	arr = arr.sort((a, b) => a - b);
	console.log(arr[0] + ' ' + arr[1]);
}
solve([ 30, 15, 50, 5 ]);
