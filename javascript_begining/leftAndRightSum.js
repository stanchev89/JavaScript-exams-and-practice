function solve(input) {
  let nums = +input[0];
  let end = nums * 2;
  let leftSum = 0;
  let rightSum = 0;
  let diff = 0;
  for (let i = 1; i <= end; i++) {
    let n = +input[i];
    if (i <= nums) {
      leftSum += n;
    } else {
      rightSum += n;
    }
  }
  diff = Math.abs(leftSum - rightSum);
  if (leftSum == rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
  } else console.log(`No, diff = ${diff}`);
}
solve(["2", "10", "90", "60", "40"]);
