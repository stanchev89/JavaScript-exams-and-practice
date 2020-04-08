function condense(input) {
  let arrayInput = input;
  while (arrayInput.length > 1) {
    let condensed = [];
    for (let i = 0; i < arrayInput.length - 1; i++) {
      condensed[i] = arrayInput[i] + arrayInput[i + 1];
    }
    arrayInput = condensed;
  }
  console.log(arrayInput[0]);
}
condense([5]);
