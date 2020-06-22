function mixins() {
	const mixinProps = {
		getQuality() {
			return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
		},
		isFast() {
			return this.processorSpeed > this.ram / 4;
		},
		isRoomy() {
			return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
		},

		isFullSet() {
			return (this.manifacturer === this._keyboard.manifacturer) === this._monitor.manifacturer;
		},
		isClassy() {
			const longBatteryLife = this.battery.expextedLife >= 3;
			const colorIsClassy = this.color === "Silver" || this.color === "Black";
			const isNotHeavy = this.weight < 3;
			return longBatteryLife && colorIsClassy && isNotHeavy;
		}
	};

	function computerQualityMixin(className) {
		className.prototype.getQuality = mixinProps.getQuality();
		className.prototype.isFast = mixinProps.isFast();
		className.prototype.isRoomy = mixinProps.isRoomy();
		return className;
	}
	function styleMixin(className) {
		className.prototype.isFullSet = mixinProps.isFullSet();
		className.prototype.isClassy = mixinProps.isClassy();
		return className;
	}
	return {
		computerQualityMixin,
		styleMixin
	};
}
