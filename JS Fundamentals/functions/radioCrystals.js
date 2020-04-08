function radioCrystals(input) {
  let target = input[0];
  let xRayCounter = 0;
  let xRayUsed = 0;
  let Cut = num => {
    let counter = 0;
    for (let i = 1; num >= target; i++) {
      if (num * 0.25 >= target) {
        num *= 0.25;
        counter++;
      } else {
        break;
      }
    }
    if (target - num == 1 && xRayCounter < 3) {
      num += 1;
      xRayCounter++;
    }
    return [num, counter, xRayCounter];
  };
  let Lap = num => {
    let counter = 0;
    for (let i = 1; num >= target; i++) {
      if (num - num * 0.2 >= target) {
        num -= num * 0.2;
        counter++;
      } else {
        break;
      }
    }
    if (target - num == 1 && xRayCounter < 3) {
      num += 1;
      xRayCounter++;
    }
    return [num, counter, xRayCounter];
  };
  let Grind = num => {
    let counter = 0;
    for (let i = 1; num >= target; i++) {
      if (num - 20 >= target) {
        num -= 20;
        counter++;
      } else {
        break;
      }
    }
    if (target - num == 1 && xRayCounter < 3) {
      num += 1;
      xRayCounter++;
    }
    return [num, counter, xRayCounter];
  };
  let Etch = num => {
    let counter = 0;
    for (let i = 1; num >= target; i++) {
      if (num - 2 >= target) {
        num -= 2;
        counter++;
      } else {
        break;
      }
    }
    if (target - num == 1 && xRayCounter < 3) {
      num += 1;
      xRayCounter++;
    }
    return [num, counter, xRayCounter];
  };
  let operations = [Cut, Lap, Grind, Etch];

  for (let index = 1; index < input.length; index++) {
    if (target !== 0) {
      let pieceCrystal = input[index];
      console.log(`Processing chunk ${pieceCrystal} microns`);
      for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i].name;
        let currentCounter = operations[i](pieceCrystal)[1];
        xRayCounter = operations[i](pieceCrystal)[2];
        pieceCrystal = Math.trunc(operations[i](pieceCrystal)[0]);

        if (currentCounter > 0) {
          console.log(`${currentOperation} x${currentCounter}`);
          console.log("Transporting and washing");
        }
        if (xRayCounter > 0 && xRayUsed == 0) {
          console.log("X-ray x1");
          xRayUsed++;
        }
        if (pieceCrystal == target) {
          console.log(`Finished crystal ${target} microns`);
          break;
        } else if (target < 1 && pieceCrystal < 01) {
          console.log(`Finished crystal ${target} microns`);
          break;
        }
      }
    }
  }
}
radioCrystals([10, 9]);
