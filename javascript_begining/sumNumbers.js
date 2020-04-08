function solve(input) {
  let numbers = +input[0];
  let sum = 0;
  for (let index = 1; index <= numbers; index++) {
    let n = +input[index];
    sum += n;
  }
  console.log(sum);
}
solve(["3", "-10", "-20", "-30", ""]);
