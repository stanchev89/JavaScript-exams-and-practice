function oddOccurences(input) {
  let allWords = new Map();
  let inputWords = input.split(" ");
  let output = [];
  for (let i = 0; i < inputWords.length; i++) {
    inputWords[i] = inputWords[i].toLowerCase();
    let currentWord = inputWords[i];
    if (!allWords.get(currentWord)) {
      allWords.set(currentWord, 1);
    } else {
      let value = allWords.get(currentWord);
      allWords.set(currentWord, value + 1);
    }
  }
  for (const [word, repeat] of allWords) {
    if (repeat % 2 != 0) {
      output.push(word);
    }
  }
  console.log(output.join(" "));
}
oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
