function solve(input) {
  let n1 = +input.shift();
  let n2 = +input.shift();
  let operator = input.shift();
  let evenOdd = "";
  let result = 0;
  let output = "";
  switch (operator) {
    case "+":
      result = n1 + n2;
      if (result % 2 == 0) {
        evenOdd = "even";
      } else evenOdd = "odd";
      output = `${n1} ${operator} ${n2} = ${result} - ${evenOdd}`;
      break;
    case "-":
      result = n1 - n2;
      if (result % 2 == 0) {
        evenOdd = "even";
      } else evenOdd = "odd";
      output = `${n1} ${operator} ${n2} = ${result} - ${evenOdd}`;
      break;
    case "*":
      result = n1 * n2;
      if (result % 2 == 0) {
        evenOdd = "even";
      } else evenOdd = "odd";
      output = `${n1} ${operator} ${n2} = ${result} - ${evenOdd}`;
      break;
    case "/":
      if (n1 == 0 || n2 == 0) {
        output = `Cannot divide ${n1} by zero`;
      } else {
        result = n1 / n2;
        output = `${n1} ${operator} ${n2} = ${result.toFixed(2)}`;
      }
      break;
    case "%":
      if (n1 == 0 || n2 == 0) {
        output = `Cannot divide ${n1} by zero`;
      } else {
        result = n1 % n2;
        output = `${n1} ${operator} ${n2} = ${result}`;
      }
      break;
  }
  console.log(output);
}
solve(["112", "3", "*"]);
