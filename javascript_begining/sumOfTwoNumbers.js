function solve(input) {
  let start = +input[0];
  let end = +input[1];
  let magicNumber = +input[2];
  let combinations = 0;
  for (first = start; first <= end; first++) {
    for (second = start; second <= end; second++) {
      combinations++;
      if (first + second == magicNumber) {
        console.log(
          `Combination N:${combinations} (${first} + ${second} = ${magicNumber})`
        );
        return;
      }
    }
  }
  console.log(`${combinations} combinations - neither equals ${magicNumber}`);
}
solve(["23", "24", "20", "", ""]);
