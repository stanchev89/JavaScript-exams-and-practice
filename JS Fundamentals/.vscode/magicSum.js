function magicSum(numbersArray, num) {
  let inputNumbers = numbersArray;
  let magicNum = num;
  let output = "";
  for (let index = 0; index < inputNumbers.length; index++) {
    let currentNum = inputNumbers[index];
    for (let i = index + 1; i < inputNumbers.length; i++) {
      if (currentNum + inputNumbers[i] == magicNum) {
        output = `${currentNum} ${inputNumbers[i]}`;
        console.log(output);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
