function solve(input) {
  let start = +input[0];
  let end = +input[1];
  let output = "";
  for (let i = start; i <= end; i++) {
    let evenSum = 0;
    let oddSum = 0;
    let current = "";
    let digit = "";
    current += i;
    for (let index = 0; index < current.length; index++) {
      digit = current[index];
      digit = Number(digit);
      if (index % 2 == 0) {
        oddSum += digit;
      } else {
        evenSum += digit;
      }
    }
    if (oddSum == evenSum) {
      output += current + " ";
    }
  }
  console.log(output);
}
solve(["123456", "124000", "", "", ""]);
