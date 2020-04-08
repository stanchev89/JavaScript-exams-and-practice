function biggestOfThreeNumbers(n1, n2, n3) {
  let input = [n1, n2, n3];
  let maxNum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < input.length; i++) {
    let currentNum = input[i];
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }
  console.log(maxNum);
}
biggestOfThreeNumbers(-2, 7, 3);
