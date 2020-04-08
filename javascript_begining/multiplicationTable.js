function solve(input) {
  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      console.log(`${row} * ${col} = ${row * col}`);
    }
  }
}
solve(["", "", "", "", ""]);
