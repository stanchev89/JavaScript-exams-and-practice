function oddAndEvenSums(inputNum) {
  let rootNum = inputNum.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < rootNum.length; i++) {
    let currentNum = Number(rootNum[i]);
    if (currentNum % 2 == 0) {
      evenSum += currentNum;
    } else {
      oddSum += currentNum;
    }
  }
  let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

  console.log(result);
}
oddAndEvenSums(3495892137259234);
