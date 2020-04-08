function solve(input) {
  let budget = +input.shift();
  let salary = 0;
  let noMoney = false;
  for (let i = 0; i <= input.length; i++) {
    let name = input.shift();
    while (name != "ACTION") {
      if (name.length > 15) {
        budget -= budget * 0.2;
      } else {
        salary = +input.shift();
        budget -= salary;
      }
      if (budget <= 0) {
        console.log(
          `We need ${Math.abs(budget).toFixed(2)} leva for our actors.`
        );
        noMoney = true;
        break;
      }
      name = input.shift();
    }
    if (noMoney) {
      break;
    }
    if (name == "ACTION") {
      console.log(`We are left with ${budget.toFixed(2)} leva.`);
      break;
    }
  }
}
solve([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION"
]);
