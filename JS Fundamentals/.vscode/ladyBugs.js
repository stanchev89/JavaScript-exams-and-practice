function ladyBugs(input) {
  let inputString = input.toString();
  inputString = inputString.split(",");
  let size = Number(inputString[0]);
  let table = Array(size);
  let positions = inputString[1].split(" ");
  for (let i = 0; i < positions.length; i++) {
    if (0 <= positions[i] && positions[i] < size) {
      table[positions[i]] = 1;
    }
  }
  for (let i = 0; i < table.length; i++) {
    if (table[i] == undefined) {
      table[i] = 0;
    }
  } // fix the positions in begining

  let actions = [];
  for (let index = 0; index < input.length - 2; index++) {
    actions[index] = input[2 + index];
  }
  for (let i = 0; i < actions.length; i++) {
    let movement = actions[i].toString();
    let currentMove = movement.split(" ");
    let ladyBugPosition = Math.trunc(Number(currentMove[0]));
    let direction = currentMove[1];
    let moveLength = Math.trunc(currentMove[2]);
    if (table[ladyBugPosition] === 1) {
      table[ladyBugPosition] = 0;

      if (direction === "right") {
        if (table[ladyBugPosition + moveLength] !== undefined) {
          if (table[ladyBugPosition + moveLength] == 0) {
            table[ladyBugPosition + moveLength] = 1;
          } else {
            for (
              let rights = ladyBugPosition + moveLength;
              rights < table.length;
              rights += moveLength
            ) {
              if (table[rights] == 0) {
                table[rights] = 1;
                break;
              }
            }
          }
        }
      } else if (direction === "left") {
        if (table[ladyBugPosition - moveLength] !== undefined) {
          if (table[ladyBugPosition - moveLength] == 0) {
            table[ladyBugPosition - moveLength] = 1;
          } else {
            for (
              let lefts = ladyBugPosition - moveLength;
              lefts >= 0;
              lefts -= moveLength
            ) {
              if (table[lefts] == 0) {
                table[lefts] = 1;
                break;
              }
            }
          }
        }
      }
    }
  }

  let output = "";
  for (let i = 0; i < table.length; i++) {
    output += table[i] + " ";
  }
  console.log(output);
}
ladyBugs([5, "-1 5 0 2 1", "-1 right 2", "3 right 1", "0 right 2", "5 left 4"]);
