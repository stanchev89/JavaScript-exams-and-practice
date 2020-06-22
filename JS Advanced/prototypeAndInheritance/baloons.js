function balloons() {
	class Balloon {
		constructor(color, gasWeight) {
			this.color = color;
			this.gasWeight = gasWeight;
		}
	}

	class PartyBalloon extends Balloon {
		constructor(color, gasWeight, ribbonColor, ribbonLength) {
			super(color, gasWeight);
			this._ribbon = {
				color: ribbonColor,
				length: ribbonLength
			};
		}
		get ribbon() {
			return this._ribbon;
		}

		set ribbon(newRibbon) {
			this._ribbon = newRibbon;
		}
	}

	class BirthdayBalloon extends PartyBalloon {
		constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
			super(color, gasWeight, ribbonColor, ribbonLength);
			this._text = text;
		}

		get text() {
			return this._text;
		}
	}

	return {
		Balloon,
		PartyBalloon,
		BirthdayBalloon
	};
}
const create = balloons();
const test = new create.PartyBalloon("blue", 10);
console.log(test.color);
