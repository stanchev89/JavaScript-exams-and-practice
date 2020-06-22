function solution(workerObj) {
	const checkHydration = {
		getHydrated() {
			if (this.dizziness === false) {
				return {};
			}
			const target = this.weight * this.experience * 0.1;
			this.levelOfHydrated += target;
			this.dizziness = false;
		}
	};
	workerObj = Object.assign(Object.create(checkHydration), workerObj);
	workerObj.getHydrated();
	return workerObj;
}

let test = {
	weight: 120,
	experience: 20,
	levelOfHydrated: 200,
	dizziness: true
};

console.log(solution(test));
