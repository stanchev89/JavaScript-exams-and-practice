function printAndSum(start, end) {
  let fromNum = Number(start);
  let toNum = Number(end);
  let sum = 0;
  let output = "";
  for (let i = fromNum; i <= toNum; i++) {
    output += i + " ";
    sum += i;
  }
  console.log(output);
  console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);
