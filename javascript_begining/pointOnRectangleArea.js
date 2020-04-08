function solve(input) {
  let x1 = +input.shift();
  let y1 = +input.shift();
  let x2 = +input.shift();
  let y2 = +input.shift();
  let x = +input.shift();
  let y = +input.shift();
  let output = "";
  if ((x == x1 || x == x2) && y >= y1 && y <= y2) {
    output = "Border";
  } else if (x >= x1 && x <= x2 && (y == y1 || y == y2)) {
    output = "Border";
  } else output = "Inside / Outside";
  console.log(output);
}
solve(["2", "-3", "12", "3", "8", "-1"]);
