class Laptop {
  constructor(info, quality) {
    this.info = { producer: info.producer, age: info.age, brand: info.brand };
    this.quality = quality;
  }
  isOn = false;
  turnOn() {
    this.isOn = true;
    this.quality -= 1;
    return this.quality, this.isOn;
  }
  turnOff() {
    this.isOn = false;
    this.quality -= 1;
    return this.quality, this.isOn;
  }
  showInfo() {
    return JSON.stringify(this.info);
  }
  get price() {
    return Number(800 - Number(this.info.age * 2) + Number(this.quality * 0.5));
  }
}
let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
