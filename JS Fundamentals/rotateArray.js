function rotateArray(input) {
  let rotatingArray = input;
  let rotations = Number(input[input.length - 1]);
  rotatingArray.pop();
  for (let i = 0; i < rotations; i++) {
    rotatingArray.unshift(rotatingArray[rotatingArray.length - 1]);
    rotatingArray.pop();
  }
  let output = "";
  for (let i = 0; i < rotatingArray.length; i++) {
    output += rotatingArray[i] + " ";
  }
  if (rotations !== Number(rotations) || rotations == undefined) {
    output = "Empty";
  }
  console.log(output);
}
rotateArray(["1", "2", "3", "4", "emptu"]);
