function solve(input) {
  let n = +input.shift();
  while (n < 1 || n > 100) {
    console.log("Invalid number!");
    n = +input.shift();
  }
  console.log(`The number is: ${n}`);
}
solve([1, 150, 200, -1, 3]);
