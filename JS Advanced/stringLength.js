function solve(arr1, arr2, arr3) {
	let sumLength = arr1.length + arr2.length + arr3.length;
	let avgLength = Math.trunc(sumLength / arguments.length);
	console.log(sumLength);
	console.log(avgLength);
}
solve('chocolate', 'ice cream', 'cake');
