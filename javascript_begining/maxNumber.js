function solve(input) {
  let n = +input.shift();
  let counter = 1;
  let maxNumber = +input.shift();
  while (counter < n) {
    counter++;
    let num = +input.shift();
    if (num < maxNumber) {
      maxNumber = num;
    }
  }
  console.log(maxNumber);
}
solve(["3", "-10", "-20", "-30", "50"]);
