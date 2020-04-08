function spiceMustFlow(startingYield) {
  let overallYield = startingYield;
  let storage = 0;
  let days = 0;
  let workersConsumption = 0;
  for (let i = overallYield; i >= 100; i -= 10) {
    days++;
    if (workersConsumption < storage - 25) {
      workersConsumption += 26;
    }
    storage += overallYield - 26;
    overallYield -= 10;
    if (overallYield < 100 && workersConsumption < storage - 25) {
      workersConsumption += 26;
      storage -= 26;
    }
  }
  console.log(days);
  console.log(storage);
}
spiceMustFlow(450);
