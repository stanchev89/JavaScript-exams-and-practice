function login(input) {
  let userName = input[0];
  let correctPass = "";
  let char = "";
  let entry = "";
  let output = "";
  for (let index = userName.length - 1; index >= 0; index--) {
    char = userName[index];
    correctPass += char;
  }
  for (let tries = 1; tries <= 4; tries++) {
    entry = input[tries];
    if (entry === correctPass) {
      console.log(`User ${userName} logged in.`);
      break;
    } else if (entry !== correctPass && tries < 4) {
      console.log(`Incorrect password. Try again.`);
    }
    if (tries == 4 && entry !== correctPass) {
      console.log(`User ${userName} blocked!`);
    }
  }
  //console.log(output);
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
