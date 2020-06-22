// function solve(input) {
// 	let arr = input.slice();
// 	const delimiter = arr.pop();
// 	function concateParts(arr, delimiter) {
// 		return arr.reduce((acc, curr, index) => {
// 			index === 0 ? (acc += curr) : (acc += `${delimiter}${curr}`);
// 			return acc;
// 		}, '');
// 	}
// 	console.log(concateParts(arr, delimiter));
// }

function solve(input) {
	let delimiter = input.pop();
	let result = input.map(function(el, index) {
		index === 0 ? el : (el = `${delimiter}${el}`);
		return el;
	});
	console.log(result.join(''));
}
solve([ 'How about no?', 'I', 'will', 'not', 'do', 'it!', '_' ]);
