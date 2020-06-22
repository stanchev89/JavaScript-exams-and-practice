function sortArray(arr, sortMethod) {
	const sorting = {
		asc: (a, b) => a - b,
		desc: (a, b) => b - a
	};
	return (function() {
		return arr.sort(sorting[sortMethod]);
	})();
}
console.log(sortArray([ 14, 7, 17, 6, 8 ], "desc"));
