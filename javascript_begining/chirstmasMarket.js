function solve(input) {
  let targetMoney = +input[0];
  let nFantasy = +input[1];
  let nHorror = +input[2];
  let nRomantic = +input[3];
  let priceFantasy = 14.9 * nFantasy;
  let priceHorror = 9.8 * nHorror;
  let priceRomantic = 4.3 * nRomantic;
  let income = priceRomantic + priceHorror + priceFantasy;
  let bonus = 0;
  let totalSum = 0;
  income = income - income * 0.2; // subtract tax
  if (income >= targetMoney) {
    bonus = Math.floor((income - targetMoney) * 0.1);
    total = income - targetMoney - bonus + targetMoney;
    console.log(`${total.toFixed(2)} leva donated.`);
    console.log(`Sellers will receive ${bonus} leva.`);
  } else {
    console.log(`${(targetMoney - income).toFixed(2)} money needed.`);
  }
}
solve(["168", "5", "3", "8", ""]);
