function solution() {
	class Keyboard {
		constructor(manufacturer, responseTime) {
			this.manufacturer = manufacturer;
			this.responseTime = responseTime;
		}
	}

	class Monitor extends Keyboard {
		constructor(manufacturer, width, height) {
			super(manufacturer);
			this.width = width;
			this.height = height;
		}
	}

	class Battery extends Keyboard {
		constructor(manufacturer, expectedLife) {
			super(manufacturer);
			this.expectedLife = expectedLife;
		}
	}

	class Computer extends Keyboard {
		constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
			super(manufacturer);
			this.processorSpeed = processorSpeed;
			this.ram = ram;
			this.hardDiskSpace = hardDiskSpace;

			if (new.target === Computer) {
				throw new TypeError();
			}
		}
	}

	class Laptop extends Computer {
		constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
			super(manufacturer, processorSpeed, ram, hardDiskSpace);
			this.weight = weight;
			this.color = color;
			this._battery = battery;

			if (!(this._battery instanceof Battery)) {
				throw new TypeError();
			}
		}

		get battery() {
			return this._battery;
		}
		set battery(bat) {
			if (bat instanceof Battery) {
				return (this._battery = battery);
			}
			throw new TypeError();
		}
	}

	class Desktop extends Computer {
		constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
			super(manufacturer, processorSpeed, ram, hardDiskSpace);
			this._keyboard = keyboard;
			if (!(this._keyboard instanceof Keyboard)) {
				throw new TypeError();
			}
			this._monitor = monitor;
			if (!(this._monitor instanceof Monitor)) {
				throw new TypeError();
			}
		}

		set keyboard(keyb) {
			if (keyb instanceof Keyboard) {
				return (this._keyboard = keyb);
			}
			throw new TypeError();
		}

		get keyboard() {
			return this._keyboard;
		}

		set monitor(mon) {
			if (mon instanceof Monitor) {
				return (this._monitor = mon);
			}
			throw new TypeError();
		}

		get monitor() {
			return this._monitor;
		}
	}

	return {
		Keyboard,
		Monitor,
		Battery,
		Computer,
		Laptop,
		Desktop
	};
}

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
			return (
				this.manufacturer === this._keyboard.manufacturer && this.manufacturer === this._monitor.manufacturer
			);
		},
		isClassy() {
			const longBatteryLife = this.battery.expectedLife >= 3;
			const colorIsClassy = this.color === "Silver" || this.color === "Black";
			const isNotHeavy = this.weight < 3;
			return longBatteryLife && colorIsClassy && isNotHeavy;
		}
	};
	return {
		computerQualityMixin(className) {
			className.prototype.getQuality = mixinProps.getQuality;
			className.prototype.isFast = mixinProps.isFast;
			className.prototype.isRoomy = mixinProps.isRoomy;
			return className;
		},
		styleMixin(className) {
			className.prototype.isFullSet = mixinProps.isFullSet;
			className.prototype.isClassy = mixinProps.isClassy;
			return className;
		}
	};
}

let component = solution();
let mixin = mixins();
let computerQualityMixin = mixins().computerQualityMixin;
let styleMixin = mixins().styleMixin;
computerQualityMixin(component.Desktop);
styleMixin(component.Desktop);
computerQualityMixin(component.Laptop);
styleMixin(component.Laptop);

let keyboard = new component.Keyboard("Logitech", 70);
let keyboard2 = new component.Keyboard("A-4", 70);
let monitor = new component.Monitor("Logitech", 28, 18);
let battery = new component.Battery("Energy", 3);
let laptop = new component.Laptop("Hewlett Packard", 2.4, 4, 0.5, 2.99, "Silver", battery);
let laptop2 = new component.Laptop("Hewlett Packard", 2.4, 4, 12, 2.99, "Silver", battery);
let desktop = new component.Desktop("Logitech", 3.3, 8, 1, keyboard, monitor);
let desktop2 = new component.Desktop("Logitech", 1.3, 8, 10, keyboard2, monitor);

console.log(desktop.isFullSet());
console.log(desktop2.isFullSet());
