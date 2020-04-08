function jansNotation(input) {
  let numbersInput = [];
  let operators = [];
  let output = "";

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    let result = 0;
    if (typeof currentChar == "number") {
      numbersInput.push(currentChar);
    } else {
      operators.push(currentChar);
      let currentOperator = operators.shift();
      let firstOperand = numbersInput[numbersInput.length - 2];
      let secondOperand = numbersInput[numbersInput.length - 1];
      numbersInput.pop();
      numbersInput.pop();

      if (firstOperand == undefined || secondOperand == undefined) {
        numbersInput = false;
        break;
      }
      switch (currentOperator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
        case "%":
          result = firstOperand % secondOperand;
          break;
      }
      numbersInput.push(result);
    }
  }
  if (numbersInput.length > 1) {
    output = "Error: too many operands!";
  } else if (numbersInput == false) {
    output = "Error: not enough operands!";
  } else {
    output = numbersInput[0];
  }
  console.log(output);
}
jansNotation([5, 3, 4, "*", "-"]);
