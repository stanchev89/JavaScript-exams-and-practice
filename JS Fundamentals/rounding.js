function rounding(n, round) {
  if (round > 15) {
    round = 15;
  }
  let output = n.toFixed(round);
  console.log(parseFloat(output));
}
rounding(10.5, 3);
