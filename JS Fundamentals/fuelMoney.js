function fuelMoney(distance, passengers, pricePerLiter) {
  let fuelConsumption = (distance / 100) * 7;
  fuelConsumption += passengers * 0.1;
  let fuelPrice = fuelConsumption * pricePerLiter;
  console.log(`Needed money for that trip is ${fuelPrice}lv.`);
}
fuelMoney(260, 9, 2.49);
