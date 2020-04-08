function searchNumber(numbers, actions) {
  let actualNumbers = numbers.slice(0, actions[0]);
  let deleteNumbers = actions[1];
  let magicNumber = actions[2];
  let repeatCounter = 0;
  actualNumbers.splice(0, deleteNumbers);
  for (let i = 0; i < actualNumbers.length; i++) {
    let currentNum = actualNumbers[i];
    if (currentNum == magicNumber) {
      repeatCounter++;
    }
  }
  let output = `Number ${magicNumber} occurs ${repeatCounter} times.`;
  console.log(output);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
