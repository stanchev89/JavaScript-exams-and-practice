function addOrSubstract(input) {
  let arrayInput = input;
  let outputArray = [];
  let sumModify = 0;
  let sumOriginal = 0;
  let output = "";
  for (let i = 0; i < arrayInput.length; i++) {
    let currentNum = Number(arrayInput[i]);
    sumOriginal += currentNum;
    if (currentNum % 2 !== 0) {
      currentNum -= i;
    } else {
      currentNum += i;
    }
    outputArray.push(currentNum);
    sumModify += currentNum;
  }
  for (let i = 0; i < outputArray.length; i++) {
    if (i < outputArray.length - 1) {
      output += outputArray[i] + ", ";
    } else {
      output += outputArray[i];
    }
  }

  console.log(`[ ${output} ]`);
  console.log(sumOriginal);
  console.log(sumModify);
}
addOrSubstract([-5, 11, 3, 0, 2]);
