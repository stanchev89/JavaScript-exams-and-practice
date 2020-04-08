function distinctArr(input) {
  let inputNumbers = input.splice(" ");
  for (let i = 0; i < inputNumbers.length; i++) {
    let currentNum = inputNumbers[i];
    for (let index = 0; index < inputNumbers.length; index++) {
      if (currentNum == inputNumbers[index] && i < index) {
        inputNumbers.splice(index, 1);
        index--;
      }
    }
  }
  let result = inputNumbers.join(" ");
  console.log(result);
}
distinctArr([4, 8, 12, 13, "4", 4, 4, 8, 5]);
