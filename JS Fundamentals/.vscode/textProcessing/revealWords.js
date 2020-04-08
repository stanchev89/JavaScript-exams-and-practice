function revealWords(keyWord, text) {
  let start = text.indexOf("*");
  while (start > -1) {
    let counter = 0;
    let end = 0;
    for (let i = start; i < text.length; i++) {
      if (text[i] == "*") {
        counter++;
      } else {
        end = i;
        break;
      }
    }
    start = text.indexOf("*", end);
    let replacer = "*".repeat(counter);
    let output = keyWord.split(", ");

    for (const word of output) {
      if (word.length == counter) {
        text = text.replace(replacer, word);
      }
    }
  }

  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
