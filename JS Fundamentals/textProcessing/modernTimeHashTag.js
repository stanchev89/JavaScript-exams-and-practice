function hashTag(text) {
  function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
  let hashTags = [];
  let start = text.indexOf("#");
  while (start > -1) {
    let currentWord = "";
    let counter = 0;
    let end = -1;
    for (let i = start + 1; i < text.length; i++) {
      if (isLetter(text[i])) {
        currentWord += text[i];
        if (i == text.length - 1) {
          hashTags.push(currentWord);
        }
      } else {
        if (currentWord.length > 0) {
          hashTags.push(currentWord);
        }
        end = i + 1;
        break;
      }
      end = i + 1;
    }
    start = text.indexOf("#", end);
  }
  for (const word of hashTags) {
    console.log(word);
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
