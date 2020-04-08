function perfectNumber(input) {
  let inputNumber = Number(input);
  let sumOfNums = 0;
  let divideNum = inputNumber / 2;
  let output = "";
  for (let i = 1; sumOfNums <= divideNum; i++) {
    let currentNum = i;
    if (inputNumber % i == 0) {
      sumOfNums += currentNum;
    }
    if (sumOfNums === inputNumber) {
      output = "We have a perfect number!";
    } else {
      output = "It's not so perfect.";
    }
  }
  console.log(output);
}
perfectNumber(1236498);
