function classVehicle() {
  class Vehicle {
    constructor(type, model, parts, fuel, drive) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.parts.quality = parts.engine * parts.power;
      this.fuel = fuel;
      this.drive = consumption => {
        this.fuel -= consumption;
        return this.fuel;
      };
    }
  }
  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle("a", "b", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
}
classVehicle();
