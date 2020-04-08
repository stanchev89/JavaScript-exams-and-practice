function sortNumbers(n1, n2, n3) {
  let input = [n1, n2, n3];
  let maxNum = Math.max(n1, n2, n3);
  let minNum = Math.min(n1, n2, n3);
  let midNum = n1 + n2 + n3 - (maxNum + minNum);

  console.log(maxNum);
  console.log(midNum);
  console.log(minNum);
}
sortNumbers(22, 22, -2);
