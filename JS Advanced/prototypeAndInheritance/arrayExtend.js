(function() {
	(Array.prototype.last = function() {
		return this[this.length - 1];
	}),
		(Array.prototype.skip = function(n) {
			const result = this.slice(n);
			return result;
		}),
		(Array.prototype.take = function(n) {
			const result = this.slice(0, n);
			return result;
		}),
		(Array.prototype.sum = function() {
			return this.reduce((acc, curr) => acc + curr);
		}),
		(Array.prototype.average = function() {
			return this.sum() / this.length;
		});
})();

const test = [ 1, 2, 3, 4, 5 ];
console.log(test.skip(2));
