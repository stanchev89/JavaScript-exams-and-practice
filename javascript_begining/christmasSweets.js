function solve(input) {
  let baklavaPrice = +input[0];
  let muffinPrice = +input[1];
  let stollenKg = +input[2];
  let candyKg = +input[3];
  let cookieKg = +input[4];
  let stollenPrice = baklavaPrice * 1.6 * stollenKg;
  let candyPrice = muffinPrice * 1.8 * candyKg;
  let cookiePrice = 7.5 * cookieKg;
  let total = stollenPrice + candyPrice + cookiePrice;
  console.log(total.toFixed(2));
}
solve(["5.55", "3.57", "4.3", "3.6", "7"]);
