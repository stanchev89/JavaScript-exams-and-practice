function solve(input) {
  let a1 = +input[0];
  let a2 = +input[1];
  a2 = a2 - 1;
  let n = +input[2];
  let end = n / 2 - 1;
  for (one = a1; one <= a2; one++) {
    let first = String.fromCharCode(one);
    if (one % 2 !== 0) {
      for (two = 1; two <= n - 1; two++) {
        for (three = 1; three <= end; three++) {
          if ((one + two + three) % 2 !== 0) {
            console.log(`${first}-${two}${three}${one}`);
          }
        }
      }
    }
  }
}
solve(["71", "74", "6", "", ""]);
