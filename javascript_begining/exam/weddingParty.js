function solve(input) {
  let guests = +input[0];
  let budget = +input[1];
  let couvert = 20;
  let sum = guests * couvert;
  let fireworks = 0;
  let donation = 0;
  let restMoney = Math.abs(budget - sum);
  if (sum > budget) {
    console.log(
      `They won't have enough money to pay the covert. They will need ${restMoney.toFixed()} lv more.`
    );
  } else {
    fireworks = restMoney * 0.4;
    donation = restMoney - fireworks;
    console.log(
      `Yes! ${fireworks.toFixed()} lv are for fireworks and ${donation.toFixed()} lv are for donation.`
    );
  }
}
solve(["20", "400", "", "", ""]);
