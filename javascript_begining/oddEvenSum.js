function solve(input) {
  let n = +input[0];
  let evenSum = 0;
  let oddSum = 0;
  let diff = 0;
  output = "";
  for (let i = 1; i <= n; i++) {
    let nums = +input[i];
    if (i % 2 == 0) {
      evenSum += nums;
    } else {
      oddSum += nums;
    }
    diff = Math.abs(oddSum - evenSum);
  }
  if (evenSum == oddSum) {
    console.log("Yes");
    console.log(`Sum = ${oddSum}`);
  } else {
    console.log("No");
    console.log(`Diff = ${diff}`);
  }
}
solve(["4", "10", "50", "60", "20"]);
