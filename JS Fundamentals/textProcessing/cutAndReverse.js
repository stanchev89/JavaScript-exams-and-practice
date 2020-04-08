function cutAndReverse(text) {
  let firstHalf = text.substring(0, text.length / 2);
  let secondHalf = text.substring(text.length / 2, text.length);
  let reverse = str => {
    let output = ` `;
    let counter = str.length - 1;
    for (let i = 0; i < str.length; i++) {
      output += str[counter];
      counter--;
    }
    return output;
  };
  console.log(reverse(firstHalf));
  console.log(reverse(secondHalf));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
