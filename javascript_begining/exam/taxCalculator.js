function solve(input) {
  let powerEngine = +input[0];
  let town = input[1];
  let ecoStandard = input[2];
  let price = 0;
  switch (town) {
    case "Sofia":
      if (powerEngine <= 37) {
        price = powerEngine * 1.43;
      } else if (powerEngine <= 55) {
        price = powerEngine * 1.5;
      } else {
        price = powerEngine * 2.68;
      }
      break;
    case "Vidin":
      if (powerEngine <= 37) {
        price = powerEngine * 1.34;
      } else if (powerEngine <= 55) {
        price = powerEngine * 1.4;
      } else {
        price = powerEngine * 2.54;
      }
      break;
    case "Varna":
      if (powerEngine <= 37) {
        price = powerEngine * 1.37;
      } else if (powerEngine <= 55) {
        price = powerEngine * 1.4;
      } else {
        price = powerEngine * 2.57;
      }
      break;
  }
  if (ecoStandard === "Euro 4") {
    price -= price * 0.15;
  } else if (ecoStandard === "Euro 5") {
    price -= price * 0.17;
  } else if (ecoStandard === "Euro 6") {
    price -= price * 0.2;
  }
  console.log(`${price.toFixed(2)} lv`);
}
solve(["169", "Varna", "Euro 6", "", ""]);
