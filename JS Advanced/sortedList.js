function solve() {
	class List {
		constructor() {
			this.nums = [];
			this.size = this.nums.length;
		}

		add(element) {
			this.nums.push(element);
			this.nums.sort((a, b) => a - b);
			this.size = this.nums.length;
			return this.nums;
		}

		remove(index) {
			if (this.nums[index] === undefined) {
				return false;
			}
			this.nums.splice(index, 1);
			this.size = this.nums.length;

			return this.nums;
		}

		get(index) {
			if (this.nums[index] !== undefined) {
				return this.nums[index];
			}
			return false;
		}
	}

	let list = new List();
	for (let i = 0; i < 10; i++) {
		list.add(i);
	}
	console.log(list.get(-1));
	console.log(list.size);
	console.log(list.get(11));
	console.log(list.size);
	console.log(list.remove(-1));
	console.log(list.size);
}
solve();
