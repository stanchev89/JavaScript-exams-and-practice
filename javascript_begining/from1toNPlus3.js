function solve(input) {
  let n = +input[0];
  let count = 1;
  for (let i = 0; i <= n; i++) {
    if (count <= n) {
      console.log(count);
    }
    count += 3;
  }
}
solve(["15", "", "", "", ""]);
