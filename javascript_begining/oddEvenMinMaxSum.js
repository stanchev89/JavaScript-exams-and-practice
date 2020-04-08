function solve(input) {
  let nums = +input[0];
  let maxOdd = Number.MIN_SAFE_INTEGER;
  let minOdd = Number.MAX_SAFE_INTEGER;
  let maxEven = Number.MIN_SAFE_INTEGER;
  let minEven = Number.MAX_SAFE_INTEGER;
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 1; i <= nums; i++) {
    let n = +input[i];
    if (i % 2 != 0) {
      sumOdd += n;
      if (n > maxOdd) {
        maxOdd = n;
        maxOdd = maxOdd.toFixed(2);
      }
      if (n < minOdd) {
        minOdd = n;
        minOdd = minOdd.toFixed(2);
      }
    }
    if (i % 2 == 0) {
      sumEven += n;
      if (n > maxEven) {
        maxEven = n;
        maxEven = maxEven.toFixed(2);
      }
      if (n < minEven) {
        minEven = n;
        minEven = minEven.toFixed(2);
      }
    }
  }
  if (sumOdd == 0) {
    minOdd = "No";
    maxOdd = "No";
  }
  if (sumEven == 0) {
    minEven = "No";
    maxEven = "No";
  }
  console.log(`OddSum=${sumOdd.toFixed(2)},`);
  console.log(`OddMin=${minOdd},`);
  console.log(`OddMax=${maxOdd},`);
  console.log(`EvenSum=${sumEven.toFixed(2)},`);
  console.log(`EvenMin=${minEven},`);
  console.log(`EvenMax=${maxEven}`);
}
solve(["1", "1", "", "", "", ""]);
