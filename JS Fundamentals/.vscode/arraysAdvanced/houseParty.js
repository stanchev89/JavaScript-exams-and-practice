function houseParty(input) {
  let output = [];
  let name = "";
  function isRepeat(name, arr) {
    let repeat = false;
    for (let i = 0; i < output.length; i++) {
      if (output[i] == name) {
        repeat = true;
        break;
      }
    }
    return repeat;
  }

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i].split(" ");
    let nameLine = currentLine[0];
    if (currentLine.includes("not") == false) {
      if (isRepeat(nameLine, output)) {
        console.log(`${nameLine} is already in the list!`);
      } else {
        output.push(nameLine);
      }
    } else {
      if (isRepeat(nameLine, output)) {
        output.splice(output.indexOf(nameLine), 1);
      } else {
        console.log(`${nameLine} is not in the list!`);
      }
    }
  }
  for (let i = 0; i < output.length; i++) {
    let writeLog = output[i];
    console.log(writeLog);
  }
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!"
]);
