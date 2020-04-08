function solve(input) {
  let budget = +input.shift();
  let season = input.shift();
  let fishers = +input.shift();
  let price = 0;
  let output = "";
  let discount = 0;
  let discount2 = 0;
  let diff = 0;
  switch (season) {
    case "Spring":
      price = 3000;
      break;
    case "Summer":
    case "Autumn":
      price = 4200;
      break;
    case "Winter":
      price = 2600;
      break;
  }
  if (fishers <= 6) {
    discount = 0.1;
  } else if (fishers > 6 && fishers <= 11) {
    discount = 0.15;
  } else {
    discount = 0.25;
  }
  price = price - price * discount;
  if (fishers % 2 == 0 && season != "Autumn") {
    discount2 = 0.05;
    price = price - price * discount2;
  }
  diff = Math.abs(budget - price);
  if (budget >= price) {
    output = `Yes! You have ${diff.toFixed(2)} leva left.`;
  } else {
    output = `Not enough money! You need ${diff.toFixed(2)} leva.`;
  }
  console.log(output);
}
solve(["2000", "summer", "14"]);
