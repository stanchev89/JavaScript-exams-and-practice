function solve(input) {
  let n = +input.shift();
  let k = 1;
  let sum = 0;
  while (k <= n) {
    k++;
    let increase = +input.shift();
    if (increase >= 0) {
      console.log(`Increase: ${increase.toFixed(2)}`);
      sum += increase;
    } else {
      console.log("Invalid operation!");
      break;
    }
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}
solve(["4", "40", "35", "22", "18", "222"]);
