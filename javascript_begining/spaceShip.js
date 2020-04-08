function solve(input) {
  let widthSpaceShip = +input[0];
  let lengthSpaceShip = +input[1];
  let heightSpaceShip = +input[2];
  let avgCosHeight = +input[3];
  let areaCosmonaut = (avgCosHeight + 0.4) * 2 * 2;
  let areaSpaceShip = widthSpaceShip * lengthSpaceShip * heightSpaceShip;
  let minCosmonauts = 3 * areaCosmonaut;
  let maxCosmonauts = 10 * areaCosmonaut;
  let output = "";
  if (areaSpaceShip >= minCosmonauts && areaSpaceShip <= maxCosmonauts) {
    let countCosmonaut = Math.floor(areaSpaceShip / areaCosmonaut);
    output = `The spacecraft holds ${countCosmonaut} astronauts.`;
  } else if (areaSpaceShip < minCosmonauts) {
    output = `The spacecraft is too small.`;
  } else {
    output = `The spacecraft is too big.`;
  }
  console.log(output);
}
solve(["3.5", "4", "5", "1.7", ""]);
