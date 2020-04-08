function magicMatrices(input) {
  let magicNumber = 0;
  let equal = false;
  for (let i = 0; i < input[0].length; i++) {
    magicNumber += input[0][i];
  }
  for (let i = 0; i < input.length; i++) {
    let currentNumber = 0;
    for (let index = 0; index < input[i].length; index++) {
      if (input[index] == undefined) {
        equal = false;
        break;
      }
      currentNumber += input[i][index];
    }
    if (magicNumber === currentNumber) {
      equal = true;
    } else {
      equal = false;
      break;
    }
  }
  for (let i = 0; i < input.length; i++) {
    let currentNumber = 0;
    for (let index = 0; index < input[i].length; index++) {
      if (input[index] == undefined) {
        equal = false;
        break;
      }
      currentNumber += input[index][i];
    }

    if (currentNumber == magicNumber) {
      equal = true;
    } else {
      equal = false;
      break;
    }
  }
  console.log(equal);
}
magicMatrices([
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0]
]);
