function solve(input) {
  let name = input[0];
  let sumAscii = 0;
  let maxAsc = Number.MIN_SAFE_INTEGER;
  let winner = "";
  for (let i = 1; i <= name.length; i++) {
    if (name != "STOP") {
      for (let index = 0; index < name.length; index++) {
        sumAscii += name.charCodeAt(index);
      }

      if (sumAscii > maxAsc) {
        maxAsc = sumAscii;
        winner = name;
      }

      name = input[i];
      sumAscii = 0;
    }
  }
  console.log(`Winner is ${winner} - ${maxAsc}!`);
}
solve(["Petar", "Georgi", "Stanimirka", "Stanimir", "STOP", ""]);
