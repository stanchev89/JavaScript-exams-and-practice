function solve(input) {
  let text = input[0];
  let point = 0;
  let sumPoint = 0;
  for (let i = 0; i <= text.length; i++) {
    let letter = text[i];
    switch (letter) {
      case "a":
        point = 1;
        break;
      case "e":
        point = 2;
        break;
      case "i":
        point = 3;
        break;
      case "o":
        point = 4;
        break;
      case "u":
        point = 5;
        break;
      default:
        point = 0;
        break;
    }
    sumPoint += point;
  }
  console.log(sumPoint);
}
solve(["toy", "", "", "", ""]);
