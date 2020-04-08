function replaceRepeatingChars(input) {
  let newText = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] !== input[i]) {
      newText += input[i];
    }
  }
  console.log(newText);
}
replaceRepeatingChars("qqqwerqwecccwd");
