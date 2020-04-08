function bunnyKill(input) {
  let bunnyPositions = input.slice();
  let bombPlaces = bunnyPositions.pop();
  let killSnowball = 0;
  let damageSnowball = 0;
  for (let i = 0; i < bunnyPositions.length; i++) {
    bunnyPositions[i] = bunnyPositions[i].split(" ");
    for (let index = 0; index < bunnyPositions[i].length; index++) {
      bunnyPositions[i][index] = Number(bunnyPositions[i][index]);
    }
  }
  bombPlaces = bombPlaces.split(" ");
  for (let i = 0; i < bombPlaces.length; i++) {
    bombPlaces[i] = bombPlaces[i].split(",");
    for (let index = 0; index < bombPlaces[i].length; index++) {
      bombPlaces[i][index] = Number(bombPlaces[i][index]);
    }
    if (bombPlaces[i].length < 2) {
      bombPlaces.splice(i, 1);
    }
  }

  function explode(arr) {
    let row = arr[0];
    let col = arr[1];
    let startRow = row - 1 >= 0 ? row - 1 : row;
    let finishRow = startRow == row ? row + 1 : startRow + 2;
    let startCol = col - 1 >= 0 ? col - 1 : col;
    let finishCol = startCol == col ? col + 1 : startCol + 2;
    if (finishRow > bunnyPositions.length - 1) {
      finishRow = bunnyPositions.length - 1;
    }
    if (finishCol > bunnyPositions[0].length - 1) {
      finishCol = bunnyPositions[0].length - 1;
    }
    let bombPower = bunnyPositions[row][col];
    if (bombPower <= 0) {
      return bunnyPositions;
    }
    damageSnowball += bombPower;
    killSnowball++;
    for (let i = startRow; i <= finishRow; i++) {
      for (let index = startCol; index <= finishCol; index++) {
        bunnyPositions[i][index] -= bombPower;
      }
    }
    return bunnyPositions;
  }
  for (let i = 0; i < bombPlaces.length; i++) {
    let currentBomb = bombPlaces[i];
    explode(currentBomb);
  }
  for (let i = 0; i < bunnyPositions.length; i++) {
    for (let index = 0; index < bunnyPositions[i].length; index++) {
      if (bunnyPositions[i][index] > 0) {
        killSnowball++;
        damageSnowball += bunnyPositions[i][index];
      }
    }
  }

  console.log(damageSnowball);
  console.log(killSnowball);

  //   console.log(bunnyPositions[0]);
  //   console.log(bunnyPositions[1]);
  //   console.log(bunnyPositions[2]);
  //   console.log(bunnyPositions[3]);
}
bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1 3,2"
]);
