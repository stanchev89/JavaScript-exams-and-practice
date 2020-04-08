function sumEvenNumbers(input) {
  let inputArrayOfNums = input;
  let sumOfEvens = 0;
  for (let num of inputArrayOfNums) {
    num = Number(num);
    if (num % 2 == 0) {
      sumOfEvens += num;
    }
  }
  console.log(sumOfEvens);
}
sumEvenNumbers(["2", "4", "6", "8", "10"]);
