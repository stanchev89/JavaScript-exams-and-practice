function hardWords(input) {
  let text = input[0];
  let keyWords = input[1];
  let index = text.indexOf("_");
  let output = "";

  while (index > -1) {
    let counter = 0;
    let replacer;
    let place = "";
    for (let i = index; i < text.length; i++) {
      if (text[i] == "_") {
        counter++;
        place += "_";
      } else {
        break;
      }
    }
    for (const word of keyWords) {
      if (counter == word.length) {
        replacer = word;
        break;
      }
    }
    text = text.replace(place, replacer);

    index = text.indexOf("_", ++index);
  }
  console.log(text);
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]
]);
