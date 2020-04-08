function pointsValidation(input) {
  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];
  function distanceBetweenPoints(x1, y1, x2, y2) {
    let h = Math.abs(y1 - y2);
    let length = Math.abs(x1 - x2);
    let distance = Math.sqrt(Math.pow(h, 2) + Math.pow(length, 2)); //Pytagor theoremy
    let output = "";
    if (Number.isInteger(distance)) {
      output = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
      output = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
    return output;
  }
  distanceBetweenPoints(x1, y1, 0, 0);

  console.log(distanceBetweenPoints(x1, y1, 0, 0));
  console.log(distanceBetweenPoints(x2, y2, 0, 0));
  console.log(distanceBetweenPoints(x1, y1, x2, y2));
}
pointsValidation([2, 1, 1, 1]);
