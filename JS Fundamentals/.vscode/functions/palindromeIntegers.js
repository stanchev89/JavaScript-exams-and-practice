function palindromeIntegers(input) {
  function checkRight(leftNumToCheck) {
    leftNumToCheck = leftNumToCheck.toString();
    let currentNum = 0;
    for (let i = 0; i < leftNumToCheck.length; i++) {
      currentNum += leftNumToCheck[i];
    }
    rightSide = Number(currentNum);
    return rightSide;
  }
  function checkLeft(leftNumToCheck) {
    leftNumToCheck = leftNumToCheck.toString();
    let currentNum = 0;
    for (let i = leftNumToCheck.length - 1; i >= 0; i--) {
      currentNum += leftNumToCheck[i];
    }
    leftSide = Number(currentNum);
    return leftSide;
  }

  for (let i = 0; i < input.length; i++) {
    let currentNum = input[i];

    if (checkLeft(currentNum) === checkRight(currentNum)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([32, 2, 232, 1010]);
