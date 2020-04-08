function stringSubstring(keyWord, text) {
  let words = text.split(" ");
  let equal = false;
  for (const key in words) {
    words[key] = words[key].toLowerCase();
    if (words[key] == keyWord) {
      console.log(words[key]);
      equal = true;
      break;
    }
  }
  if (!equal) {
    console.log(`${keyWord} not found!`);
  }
}
stringSubstring("python", "JavaScript is the best programming language");
