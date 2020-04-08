function printDNA(input) {
  let charsLeft = ["A", "C", "T", "A", "G"];
  let charsRight = ["T", "G", "T", "G", "G"];
  let printResult = [];
  function leftSide(leftChars) {
    let counter = 2;
    let output = [];
    let result = [];
    for (let i = 0; i < 3; i++) {
      result[i] = "*";
    }
    let changeDirection = false;
    let charCounter = 0;
    for (let i = 0; i < input; i++) {
      let currentChar = charsLeft[charCounter];
      charCounter++;
      if (charCounter >= 5) {
        charCounter = 0;
      }
      result[counter] = currentChar;
      if (result[counter + 1] !== undefined) {
        result[counter + 1] = "-";
      } else {
        result[counter - 1] = "*";
      }
      if (result[counter + 2] !== undefined) {
        result[counter + 2] = "-";
      } else {
        result[counter - 1] = "*";
        result[counter - 2] = "*";
      }
      let resultToString = result.toString();
      output[i] = resultToString;

      if (changeDirection == false) {
        counter--;
      } else if (changeDirection == true) {
        counter++;
      }
      if (counter == 0) {
        changeDirection = true;
      } else if (counter == 2) {
        changeDirection = false;
      }
    }
    return output;
  }
  function rightSide(rightChars) {
    let counter = 0;
    let output = [];
    let result = [];
    for (let i = 0; i < 3; i++) {
      result[i] = "-";
    }
    let changeDirection = false;
    let charCounter = 0;
    for (let i = 0; i < input; i++) {
      let currentChar = charsRight[charCounter];
      charCounter++;
      if (charCounter >= 5) {
        charCounter = 0;
      }
      result[counter] = currentChar;
      if (result[counter + 1] !== undefined) {
        result[counter + 1] = "*";
      } else {
        result[counter - 1] = "-";
      }
      if (result[counter + 2] !== undefined) {
        result[counter + 2] = "*";
      } else {
        result[counter - 1] = "-";
        result[counter - 2] = "-";
      }
      let resultToString = result.toString();
      output[i] = resultToString;

      if (changeDirection == false) {
        counter++;
      } else if (changeDirection == true) {
        counter--;
      }
      if (counter == 2) {
        changeDirection = true;
      } else if (counter == 0) {
        changeDirection = false;
      }
    }
    return output;
  }
  let resultString = "";

  for (let i = 0; i < input; i++) {
    printResult[i] = leftSide()[i] + rightSide()[i];
    for (let index = 0; index < printResult[i].length; index++) {
      if (printResult[i][index] !== ",") {
        resultString += printResult[i][index];
      }
    }
    resultString += "\n";
  }
  console.log(resultString);
}
printDNA(105);
