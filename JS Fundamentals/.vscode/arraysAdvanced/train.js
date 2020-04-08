function train(input) {
  let currentPassengers = input[0];
  let maxCapacity = Number(input[1]);
  let commands = input.slice(2, input.length);
  let output = input[0].split(" ");
  for (let i = 0; i < output.length; i++) {
    output[i] = Number(output[i]);
  }
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i].split(" ");
    if (currentCommand.includes("Add")) {
      output.push(Number(currentCommand[1]));
    } else {
      for (let index = 0; index < output.length; index++) {
        if (output[index] + Number(currentCommand[0]) <= maxCapacity) {
          output[index] = output[index] + Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  let result = output.join(" ");

  console.log(result);
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
