function reverseArrayOfString(arrayInput) {
  let inputStrings = arrayInput;
  let outputArray = [];
  let outputString = "";
  for (let index = 0; index < inputStrings.length; index++) {
    outputArray[inputStrings.length - 1 - index] = inputStrings[index];
  }
  for (const string of outputArray) {
    outputString += string + " ";
  }
  console.log(outputString);
}
reverseArrayOfString(["abc", "def", "hig", "klm", "nop"]);
