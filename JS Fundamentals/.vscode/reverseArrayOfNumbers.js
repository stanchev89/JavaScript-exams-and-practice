function reverseArrayOfNumbers(num, inputArray) {
  let newArray = [];
  let lengthNewArray = num;
  let output = "";
  for (let i = 0; i < lengthNewArray; i++) {
    newArray.push(inputArray[i]);
  }
  for (let k = lengthNewArray - 1; k >= 0; k--) {
    output += newArray[k] + " ";
  }
  console.log(output);
}
reverseArrayOfNumbers("3", [10, 20, 30, 40, 50]);
