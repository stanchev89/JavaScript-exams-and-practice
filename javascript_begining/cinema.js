function solve(input) {
  let kind = input.shift().toLowerCase();
  let rol = +input.shift();
  let col = +input.shift();
  let area = rol * col;
  let overall = 0;
  let output = "";
  switch (kind) {
    case "premiere":
      overall = area * 12.0;
      output = `${overall.toFixed(2)} leva`;
      break;
    case "normal":
      overall = area * 7.5;
      output = `${overall.toFixed(2)} leva`;
      break;
    case "discount":
      overall = area * 5;
      output = `${overall.toFixed(2)} leva`;
      break;
  }
  console.log(output);
}
solve(["Normal", "21", "13"]);
