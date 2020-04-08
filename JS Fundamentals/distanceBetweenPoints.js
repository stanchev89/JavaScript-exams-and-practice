function distanceBetweenPoints(x1, y1, x2, y2) {
  let h = Math.abs(y1 - y2);
  let length = Math.abs(x1 - x2);
  let distance = Math.sqrt(Math.pow(h, 2) + Math.pow(length, 2)); //Pytagor theoremy
  console.log(distance);
}
distanceBetweenPoints(2, 4, 5, 0);
