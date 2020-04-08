function factorialNumber(firstNumber, secondNumber) {
  let factorial = number => {
    let sum = number;
    for (let i = 1; i < number; i++) {
      sum *= number - i;
    }
    return sum;
  };
  let result = factorial(firstNumber) / factorial(secondNumber);
  console.log(result.toFixed(2));
}
factorialNumber(6, 2);
