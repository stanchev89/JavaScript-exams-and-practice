const BaseModel = require("./base");

class CubeModel extends BaseModel {
	constructor() {
		const path = __pathDir + "/config/database.json";
		super(path);
	}
	insert(newObj) {
		const { name, description, imageUrl, difficultyLevel } = newObj;
		if (!name || !description || !imageUrl || !difficultyLevel) {
			return Promise.reject(new Error("Invalid Parameters!"));
		}
		return super.insert(newObj);
	}
	getAll(queryParams) {
		if (Object.keys(queryParams).length === 0) {
			return super.getAll();
		}
		const { from, search, to } = queryParams;
		function filterCubes(cube) {
			let fromCriteria, toCriteria, searchCriteria;
			if (cube.name.includes(search) || !search) {
				searchCriteria = true;
			}
			if (cube.difficultyLevel >= Number(from) || !from) {
				fromCriteria = true;
			}
			if (cube.difficultyLevel <= Number(to) || !to) {
				toCriteria = true;
			}
			if (fromCriteria && toCriteria && searchCriteria) {
				return true;
			} else {
				return false;
			}
		}
		return super.queryBy(filterCubes);
	}
	sortCubes(criteria, type) {
		function ascSort(a, b, criteria) {
			if (criteria === "name") {
				return a[criteria].localeCompare(b[criteria]);
			}
			return a[criteria] - b[criteria];
		}
		function descSort(a, b, criteria) {
			if (criteria === "name") {
				return b[criteria].localeCompare(a[criteria]);
			}
			return b[criteria] - a[criteria];
		}
		this.entries = this.entries.sort((a, b) => {
			if (type === "asc") {
				return ascSort(a, b, criteria);
			}
			return descSort(a, b, criteria);
		});
		return Promise.resolve(this.sort(this.entries));
	}
}

module.exports = new CubeModel();
