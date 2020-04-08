function solve(input) {
  let numbers = +input[0];
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 1; i <= numbers; i++) {
    let n = +input[i];
    if (n % 2 == 0) {
      p1++;
    }
    if (n % 3 == 0) {
      p2++;
    }
    if (n % 4 == 0) {
      p3++;
    }
  }
  p1 = (p1 / numbers) * 100;
  p2 = (p2 / numbers) * 100;
  p3 = (p3 / numbers) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}
solve(["3", "3", "6", "9", ""]);
