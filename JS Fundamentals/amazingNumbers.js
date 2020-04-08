function amazingNumbers(num) {
  let numToString = num.toString();
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    let currentNum = Number(numToString[i]);
    sum += currentNum;
  }
  let sumToString = sum.toString();
  let output = "";
  for (let j = 0; j < sumToString.length; j++) {
    if (sumToString[j] == 9) {
      output = `${num} Amazing? True`;
      break;
    } else {
      output = `${num} Amazing? False`;
    }
  }
  console.log(output);
}
amazingNumbers(999);
