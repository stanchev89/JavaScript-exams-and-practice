function solve(input) {
  let numbers = +input[0];
  let n = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let diff = 0;
  let output1 = "";
  let output2 = "";
  let sum = 0;
  for (let i = 1; i <= numbers; i++) {
    n = +input[i];
    if (n > maxNumber) {
      maxNumber = n;
    }
    sum += n;
  }
  sum = sum - maxNumber;
  diff = Math.abs(sum - maxNumber);
  if (sum == maxNumber) {
    output1 = `Yes`;
    output2 = `Sum = ${sum}`;
  } else {
    output1 = `No`;
    output2 = `Diff = ${diff}`;
  }
  console.log(output1);
  console.log(output2);
}
solve(["3", "1", "1", "10", "", "", "", ""]);
