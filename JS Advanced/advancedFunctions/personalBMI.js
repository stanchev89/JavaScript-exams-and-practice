function createProfile(name, age, weight, height) {
	class Profile {
		constructor(name, age, weight, height) {
			this.name = name;
			this.personalInfo = {
				age,
				weight,
				height
			};

			this.BMI = Math.round(this.personalInfo.weight / Math.pow(this.personalInfo.height / 100, 2));
			this.status = this.checkStatus();
		}

		checkStatus() {
			let status = "";
			switch (true) {
				case this.BMI < 18.5:
					status = "underweight";
					break;
				case this.BMI < 25:
					status = "normal";
					break;
				case this.BMI < 30:
					status = "overweight";
					break;
				case this.BMI >= 30:
					status = "obese";
					break;
			}
			return status;
		}
	}
	return (function() {
		const profile = new Profile(name, age, weight, height);
		if (profile.status === "obese") {
			profile.recommendation = "admission required";
		}
		return profile;
	})();
}
const stefan = createProfile("Stefan", 31, 76, 178);
console.log(stefan.BMI);
