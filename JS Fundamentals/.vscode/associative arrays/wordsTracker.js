function wordsTracker(input) {
  let token = input.shift().split(" ");
  let keyWords = {};
  for (const word of token) {
    keyWords[word] = 0;
  }
  let keys = Array.from(Object.keys(keyWords));

  for (let i = 0; i < input.length; i++) {
    let currentWord = input[i].split(" ");
    currentWord.forEach(word => {
      if (keys.includes(word)) {
        let value = keyWords[word];
        keyWords[word] = value + 1;
      }
    });
  }

  let sortedValues = Array.from(Object.values(keyWords).sort((a, b) => b - a));
  sortedValues.forEach(value => {
    for (const key in keyWords) {
      if (keyWords[key] == value) {
        console.log(`${key} - ${value}`);
        delete keyWords[key];
      }
    }
  });
}
wordsTracker([
  "this sentence",
  "In this sentence",
  "sentence this",
  "you sentence",
  "have this",
  "to sentence",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task"
]);
