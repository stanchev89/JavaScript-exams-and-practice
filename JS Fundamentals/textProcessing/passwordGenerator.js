function passGenerator(input) {
  let firstWord = input[0].toLowerCase();
  let secondWord = input[1].toLowerCase();
  let password = firstWord.concat(secondWord);

  let replacer = input[2];
  function replaceVow(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      if (isVowel(currentChar)) {
        let replace = replacer[counter].toUpperCase();
        str = str.replace(currentChar, replace);
        counter++;
        if (counter >= replacer.length) {
          counter = 0;
        }
      }
    }
    let len = str.length - 1;
    let output = "";
    for (let i = 0; i < str.length; i++) {
      output += str[len];
      len--;
    }
    return output;
  }
  let output = replaceVow(password);

  function isVowel(c) {
    return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
  }

  console.log(`Your generated password is ${output}`);
}
passGenerator(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
