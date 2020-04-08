function solve(input) {
  let numbers = +input[0];
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let minNumber = Number.MAX_SAFE_INTEGER;
  for (i = 1; i <= numbers; i++) {
    let n = +input[i];
    if (n > maxNumber) {
      maxNumber = n;
    }
    if (n < minNumber) {
      minNumber = n;
    }
  }
  console.log(`Max number: ${maxNumber}`);
  console.log(`Min number: ${minNumber}`);
}
solve(["5", "10", "20", "304", "-10", "50"]);
