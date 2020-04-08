function solve(input) {
  let n = +input[0];
  let counter = 1;
  let isBigger = false;
  let currentPrint = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if (counter > n) {
        isBigger = true;
        break;
      }
      currentPrint += counter + " ";
      counter++;
    }
    console.log(currentPrint);
    currentPrint = "";
    if (isBigger) {
      break;
    }
  }
}
solve(["1"]);
