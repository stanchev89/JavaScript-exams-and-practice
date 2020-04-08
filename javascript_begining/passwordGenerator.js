function solve(input) {
  let n = +input[0];
  let l = +input[1];
  let output = "";
  for (let first = 1; first <= n; first++) {
    for (let second = 1; second <= n; second++) {
      for (let third = 97; third < 97 + l; third++) {
        for (let fourth = 97; fourth < 97 + l; fourth++) {
          for (let fifth = 1; fifth <= n; fifth++) {
            if (fifth > first && fifth > second) {
              output +=
                `${first}${second}${String.fromCharCode(
                  third
                )}${String.fromCharCode(fourth)}${fifth}` + " ";
            }
          }
        }
      }
    }
  }
  console.log(output);
}
solve(["3", "1", "", "", ""]);
