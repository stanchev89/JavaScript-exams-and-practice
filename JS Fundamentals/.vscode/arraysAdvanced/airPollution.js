function airPollution(map, weather) {
  let mapSofia = map.slice();
  let pollutedAreas = [];
  //to form map of Sofia in nested arrays with Numbers
  for (let i = 0; i < mapSofia.length; i++) {
    mapSofia[i] = mapSofia[i].split(" ");
    for (let index = 0; index < mapSofia[i].length; index++) {
      mapSofia[i][index] = Number(mapSofia[i][index]);
    }
  }
  //put a forces in nested arrays
  let forces = weather.slice();
  for (let i = 0; i < forces.length; i++) {
    forces[i] = forces[i].split(" ");
    forces[i][1] = Number(forces[i][1]);
  }

  function action(arrForces) {
    let currentForce = [];
    let row = 0;
    let col = 0;
    let power = 0;
    for (let i = 0; i < arrForces.length; i++) {
      currentForce = arrForces[i];

      switch (currentForce[0]) {
        case "breeze":
          row = currentForce[1];
          power = -15;
          for (let i = 0; i < 5; i++) {
            mapSofia[row][i] += power;
            if (mapSofia[row][i] < 0) {
              mapSofia[row][i] = 0;
            }
          }
          break;
        case "gale":
          col = currentForce[1];
          power = -20;
          for (let i = 0; i < 5; i++) {
            mapSofia[i][col] += power;
            if (mapSofia[i][col] < 0) {
              mapSofia[i][col] = 0;
            }
          }
          break;
        case "smog":
          row = 5;
          col = 5;
          power = currentForce[1];
          for (let i = 0; i < row; i++) {
            for (let index = 0; index < col; index++) {
              mapSofia[i][index] += power;
              if (mapSofia[i][index] < 0) {
                mapSofia[i][index] = 0;
              }
            }
          }
          break;
      }
    }

    return mapSofia;
  }

  action(forces);
  let output = "";

  let result = arrMap => {
    for (let i = 0; i < 5; i++) {
      for (let index = 0; index < 5; index++) {
        if (arrMap[i][index] >= 50) {
          pollutedAreas.push(`${i}-${index}`);
        }
      }
    }
    if (pollutedAreas == false) {
      output = "No polluted areas";
    } else {
      output = "Polluted areas: [";
      output += pollutedAreas.join("], [");
      output += "]";
    }

    return console.log(output), output;
  };

  result(mapSofia);
  //console.log(result(mapSofia));
}
airPollution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24"
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
