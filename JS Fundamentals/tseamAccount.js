function tseamAccount(input) {
  let operations = input;
  let firstElement = operations[0].split(" ");
  let output = [];
  for (let i = 0; i < firstElement.length; i++) {
    output[i] = firstElement[i];
  }
  for (let i = 1; i < operations.length; i++) {
    let currentInput = [];
    currentInput = operations[i].split(" ");
    let currentOperation = currentInput[0];
    switch (currentOperation) {
      case "Install":
        if (output.includes(currentInput[1]) == false) {
          output.push(currentInput[1]);
        }
        break;
      case "Uninstall":
        if (output.includes(currentInput[1])) {
          let remove = output.indexOf(currentInput[1]);
          output.splice(remove, 1);
        }
        break;
      case "Update":
        if (output.includes(currentInput[1])) {
          let remove = output.indexOf(currentInput[1]);
          output.splice(remove, 1);
          output.push(currentInput[1]);
        }
        break;
      case "Expansion":
        let expanGame = currentInput[1].split("-");
        let currentGame = expanGame[0];
        let expanName = `${expanGame[0]}:${expanGame[1]}`;

        if (output.includes(currentGame)) {
          let exist = output.indexOf(currentGame);
          output.splice(exist + 1, 0, expanName);
        }
        break;
    }
  }
  let result = "";
  for (let i = 0; i < output.length; i++) {
    result += output[i] + " ";
  }
  console.log(result);
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "install LoL",

  "Update Diablo",
  "Expansion CS-Go",
  "Play!"
]);
