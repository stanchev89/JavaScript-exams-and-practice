function solve(input) {
  let n = +input[0];
  let counter = 0;
  let pow = 0;
  if (n % 2 != 0) {
    n = n - 1;
  }
  for (let i = 0; i <= counter; i++) {
    counter++;
    n -= 2;
    if (n < 0) {
      break;
    }
  }
  for (let index = 0; index < counter; index++) {
    console.log(Math.pow(2, pow));
    pow += 2;
  }
}
solve(["1", "", "", "", ""]);
