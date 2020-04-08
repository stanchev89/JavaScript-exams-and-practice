function letterChangeNums(input) {
  input = input.split(" ");
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "") {
      input.splice(i, 1);
      i--;
    }
  }
  input.forEach(line => {
    line = line.split("");
    let firstChar = line.shift();
    let lastChar = line.pop();
    let num = Number(line.join(""));
    if (firstChar == firstChar.toUpperCase()) {
      output += num / numInAlphabet(firstChar);
    } else {
      output += num * numInAlphabet(firstChar);
    }
    if (lastChar == lastChar.toUpperCase()) {
      output += -numInAlphabet(lastChar);
    } else {
      output += numInAlphabet(lastChar);
    }
  });
  function numInAlphabet(char) {
    let ascii = char.charCodeAt();
    char = char.toUpperCase();
    return char.charCodeAt() - 64;
  }
  console.log(output.toFixed(2));
}
letterChangeNums("A12b");
