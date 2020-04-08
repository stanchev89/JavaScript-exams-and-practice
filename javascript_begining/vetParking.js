function solve(input) {
  let days = +input[0];
  let hours = +input[1];
  let even = false;
  let price = 0;
  for (d = 1; d <= days; d++) {
    let pH = 0;

    if (d % 2 == 0) {
      even = true;
    } else {
      even = false;
    }
    for (h = 1; h <= hours; h++) {
      if (even == true && h % 2 != 0) {
        price += 2.5;
        pH += 2.5;
      } else if (even == false && h % 2 == 0) {
        price += 1.25;
        pH += 1.25;
      } else {
        price += 1;
        pH += 1;
      }
    }

    console.log(`Day: ${d} - ${pH.toFixed(2)} leva`);
  }
  console.log(`Total: ${price.toFixed(2)} leva`);
}
solve(["2", "5", "", "", ""]);
