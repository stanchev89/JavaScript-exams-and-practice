function solve(...input) {
	let [ num1, num2 ] = input.map(Number);

	console.log(sumFromTo(num1, num2));

	function sumFromTo(firstNum, secondNum) {
		let result = 0;
		for (let i = firstNum; i <= secondNum; i++) {
			result += i;
		}
		return result;
	}
}
solve('-8', '20');
