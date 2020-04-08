function solve(input) {
  let budget = +input[0];
  let n = +input[1];
  let output = "";
  let price = 0;
  let name = "";
  let diff = 0;
  let total = 0;
  for (i = 2; i <= n * 3; i++, i++) {
    name = input[i];
    if (name == undefined || name == "") {
      break;
    }
    price = +input[i + 1];
    let discount = 0;
    switch (name) {
      case "Thrones":
        discount = 0.5 * price;
        break;
      case "Lucifer":
        discount = 0.4 * price;
        break;
      case "Protector":
        discount = 0.3 * price;
        break;
      case "TotalDrama":
        discount = 0.2 * price;
        break;
      case "Area":
        discount = 0.1 * price;
        break;
    }
    price -= discount;
    total += price;
    diff = Math.abs(budget - total);
  }
  if (budget >= total) {
    output = `You bought all the series and left with ${diff.toFixed(2)} lv.`;
  } else {
    output = `You need ${diff.toFixed(2)} lv. more to buy the series!`;
  }
  console.log(output);
}
solve([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9"
]);
