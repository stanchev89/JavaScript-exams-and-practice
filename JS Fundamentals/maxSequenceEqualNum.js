function maxSequenceEqualNums(input) {
  let numbersInput = input;
  let maxSequence = 0;
  let maxSeqNum = 0;
  let output = "";
  for (let i = 0; i < numbersInput.length; i++) {
    let currentNum = numbersInput[i];
    let counter = 1;
    let currentSequence = 0;
    for (let index = i + 1; index < numbersInput.length; index++) {
      if (currentNum == numbersInput[index]) {
        counter++;
        currentSequence = counter;
      } else {
        break;
      }
    }
    if (currentSequence > maxSequence) {
      maxSequence = currentSequence;
      maxSeqNum = currentNum;
    }
  }
  for (let i = 0; i < maxSequence; i++) {
    output += maxSeqNum + " ";
  }
  //   console.log(maxSeqNum);
  //   console.log(maxSequence);
  console.log(output);
}
maxSequenceEqualNums([4, 4, 4, 4]);
