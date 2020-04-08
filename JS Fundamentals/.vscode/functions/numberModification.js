function modifyNumber(input) {
  let numberInput = Number(input);
  let inputToString = input.toString();
  let calculateSum = num => {
    let stringNum = num.toString();
    let sumDigits = 0;
    for (let i = 0; i < stringNum.length; i++) {
      let currentDigit = Number(stringNum[i]);
      sumDigits += currentDigit;
    }
    return sumDigits;
  };

  let isAverage = false;
  let numberLength = inputToString.length;
  while (isAverage == false) {
    if (calculateSum(inputToString) / numberLength < 5) {
      isAverage = false;
      inputToString += "9";
      numberLength++;
    } else {
      isAverage = true;
      break;
    }
  }
  console.log(inputToString);
}
modifyNumber(5835);
