function solve(input) {
  let neededMoney = +input[0];
  let myMoney = +input[1];
  let countSpend = 0;
  let sum = 0;
  let operation = "";
  let currentSum = 0;
  let output1 = "";
  let output2 = "";
  let days = 0;
  for (let i = 2; i < input.length; i++) {
    if (i % 2 == 0) {
      operation = input[i];
      days++;
    } else if (i % 2 !== 0) {
      currentSum = +input[i];
      if (operation === "save") {
        countSpend = 0;
        myMoney = myMoney + currentSum;
      } else if (operation === "spend") {
        countSpend++;
        myMoney = myMoney - currentSum;
        if (myMoney < 0) {
          myMoney = 0;
        }
        if (countSpend >= 5) {
          output1 = `You can't save the money.`;
          output2 = `${days}`;
          break;
        }
      }
    }
    if (myMoney >= neededMoney) {
      output1 = `You saved the money for ${days} days.`;
      break;
    }
  }
  if (output2 != "") {
    console.log(output1);
    console.log(output2);
  } else {
    console.log(output1);
  }
}
solve([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100"
]);
