function sumDigits(number) {
  let num = number.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let currentNumber = num[i];
    currentNumber = Number(currentNumber);
    sum += currentNumber;
  }
  console.log(sum);
}
sumDigits(245678);
