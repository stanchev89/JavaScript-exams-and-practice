const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const database = JSON.parse(fs.readFileSync(__pathDir + "/config/database.json"));
const lastId = database.length;
module.exports = class BaseModel {
	constructor(path) {
		this.__path = path;
		this.entries = require(path) || [];
		//this.lastEntry = this.entries[this.entries.length - 1];
		this.lastId = lastId;
	}
	insert(newObj) {
		newObj.id = ++this.lastId;
		const newEntries = this.entries.concat(newObj);
		return writeFile(this.__path, JSON.stringify(newEntries, null, 2))
			.then(() => {
				this.entries = newEntries;
			})
			.catch((err) => {
				return console.log(err);
			});
	}

	getAll() {
		return Promise.resolve(this.entries);
	}

	getById(id) {
		const current = this.entries.find((entry) => entry.id === id);
		return Promise.resolve(current);
	}

	queryBy(fn) {
		const result = this.entries.filter(fn);
		return Promise.resolve(result);
	}
	edit(editedObj) {
		const current = this.entries.find((entry) => entry.id === editedObj.id);
		const index = this.entries.indexOf(current);
		this.entries[index] = editedObj;
		writeFile(this.__path, JSON.stringify(this.entries, null, 2)).catch((err) => {
			return console.log(err);
		});
		return Promise.resolve(this.entries);
	}
	deleteById(id) {
		const current = this.entries.find((entry) => entry.id === id);
		const index = this.entries.indexOf(current);
		this.entries.splice(index, 1);
		writeFile(this.__path, JSON.stringify(this.entries, null, 2)).catch((err) => {
			return console.log(err);
		});
		return Promise.resolve(this.entries);
	}
	sort(sortedObjs) {
		writeFile(this.__path, JSON.stringify(sortedObjs, null, 2)).catch((err) => {
			return console.log(err);
		});
		return sortedObjs;
	}
};
