function solve(input) {
  let kindFlower = input.shift();
  let n = +input.shift();
  let budget = +input.shift();
  let output = "";
  let discount = 0;
  let overPrice = 0;
  let price = 0;

  switch (kindFlower) {
    case "Roses":
      price = 5 * n;
      if (n > 80) {
        discount = price * 0.1;
      }
      output = price - discount;
      break;
    case "Dahlias":
      price = 3.8 * n;
      if (n > 90) {
        discount = price * 0.15;
      }
      output = price - discount;
      break;
    case "Tulips":
      price = 2.8 * n;
      if (n > 80) {
        discount = price * 0.15;
      }
      output = price - discount;
      break;
    case "Narcissus":
      price = 3 * n;
      if (n < 120) {
        overPrice = price * 0.15;
      }
      output = price + overPrice;
      break;
    case "Gladiolus":
      price = 2.5 * n;
      if (n < 80) {
        overPrice = price * 0.2;
      }
      output = price + overPrice;
      break;
  }
  let restSum = Math.abs(budget - output);
  if (budget >= output) {
    output = `Hey, you have a great garden with ${n} ${kindFlower} and ${restSum.toFixed(
      2
    )} leva left.`;
  } else output = `Not enough money, you need ${restSum.toFixed(2)} leva more.`;
  console.log(output);
}
solve(["Tulips", "88", "260"]);
