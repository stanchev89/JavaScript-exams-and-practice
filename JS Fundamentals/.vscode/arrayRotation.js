function arrayRotation(inputArray, n) {
  let input = inputArray;
  let result = "";
  let output = [];
  if (n !== 0) {
    for (let i = 0; i < n; i++) {
      output = [];
      for (let index = 0; index < inputArray.length - 1; index++) {
        output[index] = input[index + 1];
      }

      output.push(input[0]);
      input = output;
    }

    //   for (let i = 0; i < input.length; i++) {
    //     result += output[i] + " ";
    //   }
    // } else {
    //   for (let i = 0; i < inputArray.length; i++) {
    //     result += inputArray[i] + " ";
    //   }
  }
  console.log(input);
}
arrayRotation([51, 47, 32, 61, 21], 2);
