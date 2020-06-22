let funcSum = (function() {
	let sum = 0;
	let f = function(num) {
		sum += num;
		return f;
	};
	f.toString = function() {
		return sum;
	};
	return f;
})();

console.log(funcSum(1).toString()); // 1
console.log(funcSum(1)(3)(-6).toString()); // -1
