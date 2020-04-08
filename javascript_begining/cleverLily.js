function solve(input) {
  let age = input[0];
  let priceWashMachine = +input[1];
  let toyPrice = +input[2];
  let moneyIncrease = 0;
  let moneyCollect = 0;
  let moneyYears = 0;
  let toysYears = 0;
  let toys = 0;
  let brothersCommision = 0;
  let diff = 0;
  let output = "";
  if (age % 2 == 0) {
    moneyYears = age / 2;
    toysYears = moneyYears;
  } else {
    moneyYears = Math.floor(age / 2);
    toysYears = Math.ceil(age / 2);
  }
  toys = toysYears * toyPrice;
  brothersCommision = moneyYears;
  for (let i = 1; i <= moneyYears; i++) {
    moneyIncrease = moneyIncrease + 10;
    moneyCollect += moneyIncrease;
  }
  moneyCollect = moneyCollect + toys - brothersCommision;
  diff = Math.abs(moneyCollect - priceWashMachine);
  if (moneyCollect >= priceWashMachine) {
    output = `Yes! ${diff.toFixed(2)}`;
  } else {
    output = `No! ${diff.toFixed(2)}`;
  }
  console.log(output);
}
solve(["21", "1570.98", "3", "", ""]);
