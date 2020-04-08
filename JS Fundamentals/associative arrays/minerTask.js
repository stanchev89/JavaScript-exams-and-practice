function minerTask(input) {
  let mines = {};
  for (let i = 0; i < input.length; i++) {
    let currentInput = input[i];
    if (i % 2 == 0) {
      if (!mines.hasOwnProperty(currentInput)) {
        mines[currentInput] = Number(input[i + 1]);
      } else {
        let oldQuantity = mines[currentInput];
        mines[currentInput] = oldQuantity + Number(input[i + 1]);
      }
    }
  }
  for (const key in mines) {
    console.log(`${key} -> ${mines[key]}`);
  }
}
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
