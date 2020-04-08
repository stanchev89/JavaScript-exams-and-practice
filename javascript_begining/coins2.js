function solve(input) {
  let amount = +input[0];
  let twoLeva = 2;
  let oneLeva = 1;
  let fifthyCent = 0.5;
  let twentyCent = 0.2;
  let tenCent = 0.1;
  let fiveCent = 0.05;
  let twoCent = 0.02;
  let oneCent = 0.01;
  let coins = 0;
  let sum = 0;
  if (amount > 1) {
    twoLeva = Math.floor(amount / 2);
    amount -= twoLeva;
    coins = twoLeva;
  }
  if (amount >= 1) {
    coins++;
    amount -= oneLeva;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount >= 0.5) {
    coins++;
    amount -= fifthyCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount >= 0.4) {
    coins++;
    amount -= twentyCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount >= 0.3) {
    coins++;
    amount -= twentyCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount < 0.2) {
    coins++;
    amount -= tenCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount < 0.1 && amount > 0.05) {
    coins++;
    amount -= fiveCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount < 0.05 && amount > 0.01) {
    coins++;
    amount -= twoCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount <= 0.02) {
    coins++;
    amount -= twoCent;
    amount = Math.round(amount * 100) / 100;
  }
  if (amount < 0.01) {
    coins++;
  }
  console.log(coins);
}
solve(["2", "", "", "", ""]);
