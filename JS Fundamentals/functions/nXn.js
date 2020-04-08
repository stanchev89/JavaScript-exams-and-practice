function nXn(input) {
  let numberInput = Number(input);
  let output = "";
  for (let i = 0; i < numberInput; i++) {
    for (let index = 0; index < numberInput; index++) {
      output += numberInput + " ";
    }
    output += "\n";
  }
  console.log(output);
}
nXn(7);
