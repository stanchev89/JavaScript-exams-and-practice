function equalArrays(array1, array2) {
  //   if (array1.length == array2.length) {
  let sum = 0;
  let equals = true;
  let diff = 0;
  for (let index = 0; index < array1.length; index++) {
    array1[index] = Number(array1[index]);
    array2[index] = Number(array2[index]);
    if (array1[index] == array2[index]) {
      sum += array1[index];
    } else {
      equals = false;
      diff = index;
      break;
    }
  }
  if (equals == false) {
    console.log(`Arrays are not identical. Found difference at ${diff} index`);
  } else {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
  //   } else {
  //     console.log(
  //       `Arrays are not identical. Found difference at ${Math.min(
  //         array1.length,
  //         array2.length
  //       )} index`
  //     );
  //   }
}
equalArrays(["10", "20", "stef"], ["10", "20", "stef"]);
