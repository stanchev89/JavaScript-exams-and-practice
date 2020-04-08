function solve(input) {
  let lastSector = input[0];
  let rowsFirstSector = +input[1];
  let oddSeats = +input[2];
  let asciiSector = "";
  let firstChar = "";
  let counterRows = 0;
  let seatChar = "";
  let counterSeats = 0;
  asciiSector = lastSector.charCodeAt();
  let endSector = Number(asciiSector);
  for (let sectors = 65; sectors <= endSector; sectors++) {
    firstChar = String.fromCharCode(sectors);
    if (counterRows > 0) {
      rowsFirstSector += 1;
    }
    for (let rows = 1; rows <= rowsFirstSector; rows++) {
      if (rows % 2 == 0) {
        oddSeats += 2;
      }
      for (let seats = 97; seats < 97 + oddSeats; seats++) {
        seatChar = String.fromCharCode(seats);
        console.log(firstChar + rows + seatChar);
        counterSeats++;
      }
      if (rows % 2 == 0) {
        oddSeats -= 2;
      }
    }
    counterRows++;
  }
  console.log(counterSeats);
}
solve(["C", "6", "4", "", ""]);
