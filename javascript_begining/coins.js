function solve(input) {
  let sumRest = +input[0];
  let oneLev = Math.floor(sumRest);
  let twoLev = 2;
  let fifthyCent = 0.5;
  let twentyCent = 0.2;
  let tenCent = 0.1;
  let fiveCent = 0.05;
  let twoCent = 0.02;
  let oneCent = 0.01;
  let coins = 0;
  if (oneLev >= 1) {
    if (oneLev > 1) {
      twoLev = Math.floor(oneLev / 2);
      sumRest -= twoLev * 2;
      coins++;
      if (twoLev % 2 == 0) {
        oneLev = 0;
      } else if (sumRest >= 1) {
        oneLev = 1;
        coins++;
        sumRest -= oneLev;
      }
    } else {
      coins++;
      sumRest -= oneLev;
    }
  }
  if (sumRest >= 0.5) {
    coins++;
    sumRest -= fifthyCent;
    sumRest = Math.round(sumRest * 100) / 100;
  }
  if (sumRest <= 0.49 && sumRest >= 20) {
    sumRest -= twentyCent;
    coins++;
    if (sumRest >= 20) {
      sumRest -= twentyCent;
      coins++;
    }
    sumRest = Math.round(sumRest * 100) / 100;
  }
  if (sumRest >= 0.1) {
    coins++;
    sumRest -= tenCent;
    sumRest = Math.round(sumRest * 100) / 100;
  }
  if (sumRest >= 0.05) {
    coins++;
    sumRest -= fiveCent;
    sumRest = Math.round(sumRest * 100) / 100;
  }
  if (sumRest == 0.04) {
    coins++;
    coins++;
    sumRest = sumRest - twoCent * 2;
    sumRest = Math.round(sumRest * 100) / 100;
  }
  if (sumRest == 0.03) {
    coins++;
    coins++;
    sumRest = sumRest - (twoCent + oneCent);
    sumRest = Math.round(sumRest * 100) / 100;
  }
  if (sumRest == 0.01) {
    coins++;
    sumRest = 0;
  }

  console.log(coins);
}
solve(["1.51", "", "", "", ""]);
