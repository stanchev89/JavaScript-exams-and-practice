function valueOfString(input) {
  let [text, type] = input;
  let isLowerCase = true;
  type === "LOWERCASE" ? (isLowerCase = true) : (isLowerCase = false);
  let sumChars = 0;
  if (isLowerCase) {
    for (const char in text) {
      if (text[char].charCodeAt() > 96 && text[char].charCodeAt() <= 122) {
        sumChars += text[char].charCodeAt();
      }
    }
  } else {
    for (const char in text) {
      if (text[char].charCodeAt() <= 90 && text[char].charCodeAt() >= 65) {
        sumChars += text[char].charCodeAt();
      }
    }
  }
  console.log(`The total sum is: ${sumChars}`);
}
valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
