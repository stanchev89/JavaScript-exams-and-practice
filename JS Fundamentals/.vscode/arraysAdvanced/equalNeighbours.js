function equalNeighbor(input) {
  let matrix = input.slice();
  let equalsCounter = 0;
  for (let i = 0; i < matrix.length; i++) {
    let currentArray = matrix[i];
    let compareArray = [];
    if (matrix[i + 1] !== undefined) {
      compareArray = matrix[i + 1];
    }

    for (let index = 0; index < currentArray.length; index++) {
      if (currentArray[index] == compareArray[index]) {
        equalsCounter++;
      }

      if (currentArray[index] == currentArray[index + 1]) {
        equalsCounter++;
      }
    }
  }
  console.log(equalsCounter);
}
equalNeighbor([
  ["2", "2", "5", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "5", "5", "4", "2"]
]);
