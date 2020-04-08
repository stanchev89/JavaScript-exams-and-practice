function sortByTwoCriteria(input) {
  let inputStrings = input.slice();
  let compareAsciValue = a => {
    let sum = 0;
    sum = a[0].toLowerCase().charCodeAt();
    return sum;
  };
  inputStrings.sort(function(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else if (a.length == b.length) {
      if (compareAsciValue(a) > compareAsciValue(b)) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  for (let i = 0; i < inputStrings.length; i++) {
    console.log(inputStrings[i]);
  }
}
sortByTwoCriteria(["Deny", "omen", "test", "Default"]);
