function solve(input) {
  let testers = +input.shift();
  let sumFinal = 0;
  let ratingCounter = 0;
  let sumRating = 0;
  let name = input.shift();
  while (name != "Finish") {
    let avgCurrent = 0;
    let sumRating = 0;
    for (rate = 1; rate <= testers; rate++) {
      ratingCounter++;
      let currentRate = +input.shift();
      sumRating += currentRate;
      sumFinal += currentRate;
      avgCurrent = (sumRating / testers).toFixed(2);
    }
    console.log(`${name} - ${avgCurrent}.`);
    name = input.shift();
  }
  let totalAvg = (sumFinal / ratingCounter).toFixed(2);
  console.log(`Student's final assessment is ${totalAvg}.`);
}
solve([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish"
]);
