function diagonalAttack(input) {
  let rigthSum = 0;
  let leftSum = 0;
  let output = [];
  let counterRightSum = input.length - 1;
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let currentRow = input[i].toString().split(" ");
    output[i] = currentRow;
    leftSum += Number(currentRow[i]);
    rigthSum += Number(currentRow[counterRightSum]);
    counterRightSum--;
  }

  if (leftSum === rigthSum) {
    for (let i = 0; i < output.length; i++) {
      for (let index = 0; index < output[i].length; index++) {
        output[i][index] = rigthSum;
      }
    }
    let counterLeftSide = output[0].length - 1;
    for (let x = 0; x < input.length; x++) {
      let currentRow = input[x].toString().split(" ");

      output[x][x] = currentRow[x];
      output[x][counterLeftSide] = currentRow[counterLeftSide];
      counterLeftSide--;
    }
    for (let y = 0; y < output.length; y++) {
      for (let j = 0; j < output[0].length; j++) {
        result += output[y][j] + " ";
      }
      result += "\n";
    }
  } else {
    for (let y = 0; y < output.length; y++) {
      for (let j = 0; j < output[0].length; j++) {
        result += output[y][j] + " ";
      }
      result += "\n";
    }
  }
  console.log(result);
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1"
]);
