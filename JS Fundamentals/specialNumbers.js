function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sumOfNums = 0;
    let numToString = i.toString();
    for (let j = 0; j < numToString.length; j++) {
      let currentNum = Number(numToString[j]);
      sumOfNums += currentNum;
    }
    if (sumOfNums == 5 || sumOfNums == 7 || sumOfNums == 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumbers(55);
