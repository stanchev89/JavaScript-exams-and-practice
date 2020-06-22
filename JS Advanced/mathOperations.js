function solve(num1, num2, operator) {
	let action = {
		'+': () => {
			return num1 + num2;
		},
		'-': () => {
			return num1 - num2;
		},
		'*': () => {
			return num1 * num2;
		},
		'/': () => {
			return num1 / num2;
		},
		'%': () => {
			return num1 % num2;
		},
		'**': () => {
			return num1 ** num2;
		}
	};
	console.log(action[operator](num1, num2));
}
solve(5, 6, '+');
