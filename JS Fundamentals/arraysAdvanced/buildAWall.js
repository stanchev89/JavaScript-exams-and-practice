function buildAWall(input) {
  let pesosPerConcrete = 1900;
  let wallMilesLong = input.slice();
  let sectionCubic = 195;
  let output = [];
  let isReady = false;
  let totalSum = 0;
  while (isReady == false) {
    let counter = 0;
    let currentSum = 0;
    for (let i = 0; i < 1; i++) {
      for (let index = 0; index < wallMilesLong.length; index++) {
        if (wallMilesLong[index] + 1 <= 30) {
          wallMilesLong[index]++;
          counter++;
        }
      }
      currentSum += counter * sectionCubic;
      output.push(currentSum);
      totalSum += currentSum;
    }
    for (let i = 0; i < wallMilesLong.length; i++) {
      if (wallMilesLong[i] == 30) {
        isReady = true;
      } else {
        isReady = false;
        break;
      }
    }
  }
  let result = output.join(", ");
  let price = totalSum * pesosPerConcrete;
  console.log(result);
  console.log(`${price} pesos`);
}
buildAWall([21, 25, 28]);
