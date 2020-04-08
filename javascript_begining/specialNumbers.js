function solve(input) {
  let n = +input[0];
  let isValid = false;
  let output = "";
  for (i = 1111; i <= 9999; i++) {
    let partition = "";
    partition += i;
    for (index = 0; index < partition.length; index++) {
      if (n % partition[index] == 0) {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      output += i + " ";
    }
  }
  console.log(output);
}
solve(["3", "", "", "", ""]);
