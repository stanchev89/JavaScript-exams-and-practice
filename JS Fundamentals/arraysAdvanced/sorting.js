function sorting(input) {
  let inputNumbers = input.slice();
  let output = [];
  while (inputNumbers.length > 0) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < inputNumbers.length; i++) {
      let currentNum = inputNumbers[i];
      if (currentNum > maxNum) {
        maxNum = currentNum;
      }
    }
    output.push(maxNum);
    inputNumbers.splice(inputNumbers.indexOf(maxNum), 1);
  }
  // for (let i = 0; i < output.length - 1; i++) {
  //   let currentNum = output[i];
  //   for (let index = i; index < output.length; index++) {
  //     if (currentNum == output[index + 1]) {
  //       output.splice(index, 1);
  //       index--;
  //     }
  //   }
  // }

  let outputReady = [];
  let counter = output.length - 1;
  for (let i = 0; i < output.length / 2; i++) {
    outputReady.push(output[i]);
    if (counter == i) {
      break;
    }
    outputReady.push(output[counter]);
    counter--;
  }
  let result = outputReady.join(" ");
  console.log(result);
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
