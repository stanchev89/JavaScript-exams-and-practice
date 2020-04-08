function solve(input) {
  let months = +input[0];
  let commision = +input[1];
  let pricePerMonth = +input[2];
  commision = commision / 100;
  let totalSum = 0;
  totalSum = Math.floor(months / 2) * pricePerMonth;
  pricePerMonth -= pricePerMonth * 0.2;
  totalSum += Math.ceil(months / 2) * pricePerMonth;
  totalSum += totalSum * commision;
  console.log(`Total: ${totalSum.toFixed(2)}`);
}
solve(["23", "19", "540", "", ""]);
