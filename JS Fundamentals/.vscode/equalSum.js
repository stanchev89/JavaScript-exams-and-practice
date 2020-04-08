function equalSum(input) {
  let arrayInput = input;
  let output = "";
  for (let index = 0; index < arrayInput.length; index++) {
    let currentNum = arrayInput[index];
    let leftSide = [];
    let rightSide = [];
    let sumLeft = 0;
    let sumRight = 0;
    for (let left = 0; left < index; left++) {
      if (arrayInput[left] !== undefined) {
        leftSide.push(arrayInput[left]);
        sumLeft += leftSide[leftSide.length - 1];
      }
    }
    for (let right = index + 1; right < arrayInput.length; right++) {
      if (arrayInput[right] !== undefined) {
        rightSide.push(arrayInput[right]);
        sumRight += rightSide[rightSide.length - 1];
      }
    }
    if (sumRight == sumLeft) {
      output = index;
      break;
    } else {
      output = "no";
    }
  }
  console.log(output);
}
equalSum([1, 2, 3, 3]);
