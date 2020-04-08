function solve(input) {
  let n = +input[0];
  let count = n;
  for (let i = 1; i <= n; i++) {
    console.log(count);
    count--;
  }
}
solve(["6", "", "", "", ""]);
