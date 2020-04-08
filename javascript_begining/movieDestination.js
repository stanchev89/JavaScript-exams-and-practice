function solve(input) {
  let budget = +input[0];
  let destination = input[1];
  let season = input[2];
  let days = input[3];
  let price = 0;
  switch (season) {
    case "Winter":
      if (destination == "Dubai") {
        price = days * 45000;
        price = price - price * 0.3;
      } else if (destination == "Sofia") {
        price = days * 17000;
        price = price * 1.25;
      } else if (destination == "London") {
        price = days * 24000;
      }
      break;
    case "Summer":
      if (destination == "Dubai") {
        price = days * 40000;
        price = price - price * 0.3;
      } else if (destination == "Sofia") {
        price = days * 12500;
        price = price * 1.25;
      } else if (destination == "London") {
        price = days * 20250;
      }
      break;
  }
  if (price <= budget) {
    console.log(
      `The budget for the movie is enough! We have ${(budget - price).toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${(price - budget).toFixed(2)} leva more!`);
  }
}
solve(["1000000", "Dubai", "Summer", "5", ""]);
