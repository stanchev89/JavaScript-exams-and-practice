function solve(input) {
  let width = +input[0];
  let length = +input[1];
  let cakeArea = width * length;
  let piece = 0;
  let sumPieces = 0;
  let output = "";
  let diff = 0;
  for (let i = 2; i < input.length; i++) {
    piece = input[i];
    if (piece !== "STOP") {
      piece = parseInt(piece);
      sumPieces += piece;
      if (sumPieces >= cakeArea) {
        diff = Math.abs(cakeArea - sumPieces);
        output = `No more cake left! You need ${diff} pieces more.`;
        break;
      }
    } else if (piece === "STOP") {
      diff = Math.abs(cakeArea - sumPieces);
      output = `${diff} pieces are left.`;
      break;
    }
  }
  console.log(output);
}
solve(["10", "2", "2", "4", "6", "STOP", "21", "", ""]);
