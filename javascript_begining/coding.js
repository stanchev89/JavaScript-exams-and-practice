function solve(input) {
  let n = +input[0];
  let numberToString = "";
  numberToString += n;
  let digit = "";
  let char = 0;
  let current = "";
  for (let index = numberToString.length - 1; index >= 0; index--) {
    digit = numberToString[index];
    char = Number(digit);
    if (char !== 0) {
      char += 33;
      digit = Number(digit);
      char = String.fromCharCode(char);
    } else {
      char = "ZERO";
      digit = 1;
    }
    for (let code = 1; code <= digit; code++) {
      if (char == "ZERO") {
        current = "ZERO";
        continue;
      }
      current += char;
    }
    console.log(current);
    char = "";
    current = "";
  }
}
solve(["2049"]);
