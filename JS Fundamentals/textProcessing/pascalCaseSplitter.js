function caseSplitter(text) {
  let start = false;
  let end = true;
  let words = [];
  for (let i = 0; i < text.length; i++) {
    let currentWord = "";
    let currentChar = text[i];
    if (currentChar == currentChar.toUpperCase()) {
      currentWord += currentChar;
      for (let index = i + 1; index < text.length; index++) {
        if (text[index] == text[index].toLowerCase()) {
          currentWord += text[index];
        } else {
          i = index - 1;
          break;
        }
      }
    }
    if (currentWord !== "") {
      words.push(currentWord);
    }
  }
  console.log(words.join(", "));
}
caseSplitter("ThisIsSoAnnoyingToDo");
