function calculator(firstNum, operator, secondNum) {
  let output = 0;
  switch (operator) {
    case "+":
      output = firstNum + secondNum;
      break;
    case "-":
      output = firstNum - secondNum;
      break;
    case "*":
      output = firstNum * secondNum;
      break;
    case "/":
      if (firstNum == 0 || secondNum == 0) {
        output = 0;
      } else {
        output = firstNum / secondNum;
      }
      break;
    case "-":
      output * firstNum * secondNum;
      break;
    case "%":
      output = firstNum % secondNum;
      break;
  }
  console.log(output.toFixed(2));
}
calculator(25.5, "*", 3);
