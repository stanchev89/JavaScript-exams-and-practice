function sequences(input) {
  let uniqueArr = {};
  for (const line of input) {
    let currentArr = JSON.parse(line);
    currentArr.sort((a, b) => b - a);

    if (!uniqueArr.hasOwnProperty(currentArr)) {
      uniqueArr[currentArr] = currentArr;
    }
  }

  let sortedArrs = Object.values(uniqueArr);
  sortedArrs.sort((a, b) => a.length - b.length);

  for (const arr of sortedArrs) {
    if (uniqueArr.hasOwnProperty(arr)) {
      let print = uniqueArr[arr].join(", ");
      console.log(`[${print}]`);
    }
  }
}
sequences(["[1, 2, 3, 4]", "[5, 6, 7, 8]", "[9, 10, 11, 12]", "[3, 2, 1.4]"]);
