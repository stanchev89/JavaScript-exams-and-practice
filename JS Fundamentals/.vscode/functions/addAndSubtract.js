function addAndSubtract(firstNum, secondNum, thirdNum) {
  let operation = (firstNum, secondNum, thirdNum) => {
    let add = firstNum + secondNum;
    let result = add - thirdNum;
    return result;
  };

  return console.log(operation(firstNum, secondNum, thirdNum));
}
addAndSubtract(1, 17, 30);
console.log(addAndSubtract(23, 6, 10));
