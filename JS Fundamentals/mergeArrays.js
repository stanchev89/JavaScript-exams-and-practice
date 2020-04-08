function mergeArrays(array1, array2) {
  let outputArray = [];
  let output = "";

  for (let i = 0; i < array1.length; i++) {
    if (i % 2 == 0) {
      let sum = Number(array1[i]) + Number(array2[i]);
      outputArray.push(sum);
    } else {
      let concatenate = array1[i] + array2[i];
      outputArray.push(concatenate);
    }
    if (i < array1.length - 1) {
      output += outputArray[i] + " - ";
    } else {
      output += outputArray[i];
    }
  }
  console.log(output);
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
