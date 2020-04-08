function maxNumber(input) {
  let arrayInput = input;
  let outputArray = [];
  let currentNum = 0;
  let isBigger = true;
  for (let i = 0; i <= arrayInput.length - 2; i++) {
    currentNum = arrayInput[i];

    for (let index = i + 1; index < arrayInput.length; index++) {
      if (currentNum > arrayInput[index]) {
        isBigger = true;
      } else {
        isBigger = false;
        break;
      }
    }

    if (isBigger) {
      outputArray.push(currentNum);
    }
  }
  outputArray.push(arrayInput[arrayInput.length - 1]);
  let output = "";
  for (let i = 0; i < outputArray.length; i++) {
    output += outputArray[i] + " ";
  }
  console.log(output);
}
maxNumber([41, 41, 34, 20]);
