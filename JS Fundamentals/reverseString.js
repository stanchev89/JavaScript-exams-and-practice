function reverseString(input) {
  let word = input;
  let newWord = "";
  for (let i = input.length - 1; i >= 0; i--) {
    let currentChar = input[i];
    newWord += currentChar;
  }
  console.log(newWord);
}
reverseString("SoftUni");
