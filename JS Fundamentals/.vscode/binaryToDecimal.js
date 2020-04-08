function binaryToDecimal(binNumb) {
  let binary = Number(binNumb);
  let sum = 0;
  let binToString = binary.toString();
  let counter = -1;
  for (let i = binToString.length - 1; i >= 0; i--) {
    counter++;
    let currentNum = Number(binToString[i]);
    let currentBin = 0;
    if (currentNum == 0) {
    } else {
      currentBin = Math.pow(2, counter);
      currentBin = Number(currentBin);
      sum += currentBin;
    }
  }
  console.log(sum);
}
binaryToDecimal(00001001);
