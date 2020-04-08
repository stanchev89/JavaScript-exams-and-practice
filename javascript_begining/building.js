function solve(input) {
  let floors = +input[0];
  let numbers = +input[1];
  let isEven = true;
  let kind = "";
  let output = "";
  for (row = floors; row >= 1; row--) {
    if (row % 2 != 0) {
      isEven = false;
      kind = "A";
    } else {
      kind = "O";
    }
    if (row == floors || floors == 1) {
      kind = "L";
    }
    for (col = 0; col < numbers; col++) {
      output += kind + row + col + " ";
    }
    console.log(output);
    output = "";
  }
}
solve(["1", "1", "", "", ""]);
