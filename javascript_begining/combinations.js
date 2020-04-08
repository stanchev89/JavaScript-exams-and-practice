function solve(input) {
  let inputs = +input[0];
  let max = inputs;
  let counter = 0;
  let operation = 0;
  for (let first = 0; first <= max; first++) {
    for (let second = 0; second <= max; second++) {
      for (let third = 0; third <= max; third++) {
        operation = first + second + third;
        if (operation === max) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
solve(["5", "", "", "", ""]);
