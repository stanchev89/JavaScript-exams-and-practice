function sortedList() {
	const collection = [];
	const myPorto = {
		add(el) {
			this.push(el);
			this.sort((a, b) => a - b);
			this.size++;
			return this;
		},
		remove(index) {
			if (this[index] == undefined) {
				throw Error("Invalid index");
			}
			this.splice(index, 1);
			this.size--;

			return this;
		},
		get(index) {
			if (this[index] == undefined) {
				throw Error("Invalid index");
			}
			return this[index];
		}
	};
	for (const proto in myPorto) {
		collection[proto] = myPorto[proto];
	}

	return (function() {
		const output = Object.assign(collection);
		output.size = 0;
		return output;
	})();
}
var myCollection = sortedList();
myCollection.add(5);
console.log(myCollection.get(0));

myCollection.add(2);
console.log(myCollection.get(0));

myCollection.add(1);
myCollection.remove(0);
myCollection.get(0);
console.log(myCollection.size);
