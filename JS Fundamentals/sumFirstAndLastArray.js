function sumFirstLastArrayElements(input) {
  let firstInput = 0;
  let lastInput = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    if (i == input.length - 1) {
      lastInput = Number(input[i]);
    } else if (i == 0) {
      firstInput = Number(input[i]);
    }
  }
  let sum = firstInput + lastInput;
  console.log(sum);
}
sumFirstLastArrayElements(["10", "17", "22", "33"]);
