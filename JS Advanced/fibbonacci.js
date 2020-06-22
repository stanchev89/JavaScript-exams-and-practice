function getFibonator() {
	const count = [ 0, 1 ];

	return output;

	function output() {
		const index = count.length - 1;
		const toReturn = count[index] + count[index - 1];
		count.push(toReturn);
		return count[index];
	}
}
let fib = getFibonator();
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5
fib(); // 13
fib(); // 8
console.log(fib());
