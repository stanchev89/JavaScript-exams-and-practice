function bombNumbers(inputNumbers, bomb) {
  let numberString = inputNumbers;
  let bombNum = bomb[0];
  let sum = 0;
  for (let index = 0; index < numberString.length; index++) {
    let bombPower = bomb[1];
    let deleteNums = bombPower * 2 + 1;
    for (let i = 0; i < numberString.length; i++) {
      let currentNum = numberString[i];
      if (currentNum == bombNum) {
        if (i - bombPower < 0) {
          deleteNums = numberString.indexOf(bombNum) + bombPower + 1;
          bombPower = i;
        }
        numberString.splice(i - bombPower, deleteNums);
        index = -1;
        break;
      }
    }
  }
  for (let i = 0; i < numberString.length; i++) {
    sum += numberString[i];
  }
  console.log(numberString);

  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 4]);
