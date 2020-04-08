function spiralMatrix(n1, n2) {
  let tableRows = n1;
  let tableCols = n2;
  let tableSize = n1 * n2;
  let output = new Array(tableRows);

  for (let i = 0; i < tableRows; i++) {
    output[i] = new Array(tableCols);
    for (let j = 0; j < tableCols; j++) {
      output[i][j] = 0;
    }
  }
  let start = 0;
  let rowCounter = 0;
  let colCounter = output[0].length - 1;
  let firstCounter = 1;
  for (let firstRow = 0; firstRow < tableRows; firstRow++) {
    output[0][firstRow] = firstCounter;
    firstCounter++;
  }

  for (let i = firstCounter; i < tableSize; ) {
    while (rowCounter < output.length - 1) {
      rowCounter++;
      output[rowCounter][colCounter] = i;
      i++;
    }

    colCounter--;
    for (let last = colCounter; last >= 0; last--) {
      output[rowCounter][last] = i;
      i++;
      //   console.log(output[4]);
    }
    colCounter = 0;
    rowCounter--;
    while (rowCounter > 0) {
      output[rowCounter][colCounter] = i;
      i++;
      rowCounter--;
    }
    rowCounter++;
    colCounter++;
    while (colCounter < tableRows - 1) {
      output[rowCounter][colCounter] = i;
      i++;
      colCounter++;
    }
    rowCounter++;
    colCounter--;
    while (rowCounter < tableCols - 1) {
      output[rowCounter][colCounter] = i;
      i++;
      rowCounter++;
    }
    rowCounter--;
    colCounter--;
    while (colCounter > 0) {
      output[rowCounter][colCounter] = i;
      i++;
      colCounter--;
    }
    colCounter--;
    console.log(output[0]);
    console.log(output[1]);
    console.log(output[2]);
    console.log(output[3]);
    console.log(output[4]);

    break;
  }
}
spiralMatrix(6, 6);
