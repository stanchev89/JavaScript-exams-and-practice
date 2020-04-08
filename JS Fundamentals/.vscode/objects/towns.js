function town(input) {
  let inputTowns = input.slice();
  let townsInfo = [];
  let outputObj = [];
  for (let i = 0; i < inputTowns.length; i++) {
    let currentCity = {};
    townsInfo = inputTowns[i].split(" | ");
    currentCity.town = townsInfo.shift();
    currentCity.latitude = Number(townsInfo.shift()).toFixed(2);
    currentCity.longitude = Number(townsInfo.shift()).toFixed(2);
    outputObj.push(currentCity);
  }
  for (let i = 0; i < outputObj.length; i++) {
    // console.log(
    //   `{ town: '${outputObj[i].town}', latitude: '${outputObj[i].latitude}', longitude: '${outputObj[i].longitude}' }`
    // );

    console.log(JSON.stringify(outputObj[i], " ", ""));
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
