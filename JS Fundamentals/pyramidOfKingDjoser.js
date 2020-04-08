function pyramid(base, increment) {
  let baseSide = Number(base);
  let stepHeight = Number(increment);
  let floors = 0;
  let stoneBulk = 0;
  let marbleBulk = 0;
  let goldBulk = 0;
  let lapizLazuliBulk = 0;
  let overallStone = 0;
  let overallMarble = 0;
  let overallLapizLazuli = 0;
  for (let i = base; i > 0; i -= 2) {
    floors++;
    if (floors % 5 !== 0 && i > 2) {
      stoneBulk = (baseSide - 2) * (baseSide - 2) * increment;
      marbleBulk = (baseSide * 2 + (baseSide - 2) * 2) * increment;
      overallStone += stoneBulk;
      overallMarble += marbleBulk;
    } else if (floors % 5 == 0 && i > 2) {
      stoneBulk = (baseSide - 2) * (baseSide - 2) * increment;
      overallStone += stoneBulk;
      lapizLazuliBulk = (baseSide * 2 + (baseSide - 2) * 2) * increment;
      overallLapizLazuli += lapizLazuliBulk;
    }
    if (i == 1 || i == 2) {
      goldBulk = baseSide * baseSide * increment;
      break;
    }
    baseSide -= 2;
  }
  console.log(`Stone required: ${Math.ceil(overallStone)}`);
  console.log(`Marble required: ${Math.ceil(overallMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(overallLapizLazuli)}`);
  console.log(`Gold required: ${Math.ceil(goldBulk)}`);
  console.log(`Final pyramid height: ${Math.floor(floors * increment)}`);
}
pyramid(11, 0.75);
