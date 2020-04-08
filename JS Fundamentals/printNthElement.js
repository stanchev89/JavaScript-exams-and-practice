function printNthElement(input) {
  let step = Number(input[input.length - 1]);
  let output = input[0];

  for (let i = step; i < input.length - 1; i += step) {
    output += " " + input[i];
  }
  console.log(output);
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
