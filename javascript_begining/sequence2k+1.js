function solve(input) {
  let n = +input.shift();
  let k = 1;
  while (k <= n) {
    console.log(k);
    k = k * 2 + 1;
  }
}
solve(["101"]);
