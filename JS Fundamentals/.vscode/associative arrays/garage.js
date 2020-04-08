function garage(inputArr) {
  let garagesMap = new Map();
  for (let row of inputArr) {
    let [garage, carKeyValues] = row.split(" - ");
    if (!garagesMap.has(garage)) {
      garagesMap.set(garage, [carKeyValues]);
    } else {
      let availableCars = garagesMap.get(garage);
      availableCars.push(carKeyValues);
      garagesMap.set(garage, availableCars);
    }
  }
  let sortedGarages = [...garagesMap.entries()];
  let output = "";
  for (let [currGarage, currCarKeyValue] of sortedGarages) {
    output += `Garage № ${currGarage}\n`;
    for (let currCarProperties of currCarKeyValue) {
      currCarProperties = currCarProperties.replace(/: /g, " - ");
      output += `--- ${currCarProperties}\n`;
    }
  }
  console.log(output);
}

garage([
  "4 - color: blue, fuel type: diesel",
  "4 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "1 - color: dark blue, fuel type: diesel, manufacture: Fiat",
  "3 - color: dark blue, fuel type: diesel, manufacture: Fiat",
  "5 - color: dark blue, fuel type: diesel, manufacture: Fiat",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat"
]);
