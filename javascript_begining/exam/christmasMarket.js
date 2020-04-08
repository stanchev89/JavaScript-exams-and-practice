function solve(input) {
  let budget = +input[0];
  let counter = 0;
  let price = 0;
  let totalSum = 0;
  let diff = 0;
  let notEnough = false;
  for (let i = 1; i <= input.length; i++) {
    let product = input[i];
    if (product != "Finish") {
      counter++;
      switch (product) {
        case "Star":
          price = 5.69;
          break;
        case "Angel":
          price = 8.49;
          break;
        case "Lights":
          price = 11.2;
          break;
        case "Wreath":
          price = 15.5;
          break;
        case "Candle":
          price = 3.59;
          break;
      }
      if (i % 3 == 0) {
        price -= price * 0.3;
      }
      totalSum += price;
      if (totalSum > budget) {
        counter--;
        diff = Math.abs(budget - totalSum);
        console.log(`Not enough money! You need ${diff.toFixed(2)}lv more.`);
        totalSum -= price;
        break;
      }
    }
    if (product === "Finish") {
      console.log("Congratulations! You bought everything!");
      break;
    }
  }
  console.log(`${counter} items -> ${totalSum.toFixed(2)}lv spent.`);
}
solve(["30", "Wreath", "Lights", "Star"]);
