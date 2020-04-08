function evenOddSubstraction(input) {
  let inputArray = input;
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = Number(inputArray[i]);
    if (inputArray[i] % 2 == 0) {
      evenSum += input[i];
    } else {
      oddSum += input[i];
    }
  }
  console.log(evenSum - oddSum);
}
evenOddSubstraction([3, 5, 7, 9]);
