function arrayManipulator(numbers, commands) {
  let numbersArr = numbers.slice();
  let commandsArr = commands.slice();
  let commandsUse = [];
  for (let i = 0; i < commandsArr.length; i++) {
    commandsUse[i] = commandsArr[i].split(" ");
  }
  let addFunc = arr => {
    arr[1] = Number(arr[1]);
    arr[2] = Number(arr[2]);
    numbersArr.splice(arr[1], 0, arr[2]);
    return numbersArr;
  };
  let addManyFunc = arr => {
    let action = arr.shift();
    let index = Number(arr.shift());
    let currentCommands = [...arr];
    let counter = currentCommands.length - 1;
    for (let i = 0; i < currentCommands.length; i++) {
      currentCommands[i] = Number(currentCommands[i]);
      numbersArr.splice(index, 0, Number(currentCommands[counter]));
      counter--;
    }
    return numbersArr;
  };
  let containsFunc = arr => {
    let magicNum = Number(arr[1]);
    let index = -1;
    for (let i = 0; i < numbersArr.length; i++) {
      let currentNum = numbersArr[i];
      if (currentNum == magicNum) {
        index = i;
        break;
      }
    }

    return console.log(index);
  };
  let removeFunc = arr => {
    let delElement = Number(arr[1]);
    numbersArr.splice(delElement, 1);
    return numbersArr;
  };
  let shiftFunc = arr => {
    let rotations = Number(arr[1]);
    for (let i = 0; i < rotations; i++) {
      let currentNum = Number(numbersArr[0]);
      numbersArr.splice(0, 1);
      numbersArr.push(currentNum);
    }
    return numbersArr;
  };
  let sumPairIsFunc = () => {
    let sumArray = [];
    counter = 0;
    for (let i = 0; i < numbersArr.length; i++) {
      if (numbersArr[i + 1] == NaN || numbersArr[i + 1] == undefined) {
        sumArray[counter] = Number(numbersArr[i]);
      } else {
        sumArray[counter] = numbersArr[i] + numbersArr[i + 1];
      }
      counter++;
      i++;
    }
    numbersArr = sumArray;
    return numbersArr;
  };

  let isFinish = false;
  let output = `[ `;

  for (let i = 0; i < commandsUse.length; i++) {
    currentCommand = commandsUse[i][0];
    switch (currentCommand) {
      case "add":
        addFunc(commandsUse[i]);
        break;
      case "addMany":
        addManyFunc(commandsUse[i]);
        break;
      case "contains":
        containsFunc(commandsUse[i]);
        break;
      case "remove":
        removeFunc(commandsUse[i]);
        break;
      case "shift":
        shiftFunc(commandsUse[i]);
        break;
      case "sumPairs":
        sumPairIsFunc();
        break;
      case "print":
        for (let i = 0; i < numbersArr.length; i++) {
          if (i == numbersArr.length - 1) {
            output += numbersArr[i] + " ]";
          } else {
            output += numbersArr[i] + ", ";
          }
        }
        console.log(output);

        isFinish = true;
        break;
    }
    if (isFinish) {
      break;
    }
  }
}
arrayManipulator([2, 2, 4, 2, 4], [("add 1 4", "sumPairs", "print")]);
