function nonDecreasingSubSeq(input) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let biggerNums = [];
  for (let i = 0; i < input.length; i++) {
    let currentNum = input[i];
    if (currentNum >= maxNum) {
      maxNum = currentNum;
      biggerNums.push(maxNum);
    }
  }
  let output = "";
  for (let i = 0; i < biggerNums.length; i++) {
    output += biggerNums[i] + " ";
  }
  console.log(output);
}
nonDecreasingSubSeq([1, 2, 3, 4]);
