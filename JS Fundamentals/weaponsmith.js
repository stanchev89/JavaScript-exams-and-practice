function weaponsmith(input) {
  let weaponName = input.shift().split("|");
  for (const line of input) {
    let [action, direction, index] = line.split(" ");
    index = Number(index);
    switch (action) {
      case "Move":
        if (direction == "Left" && weaponName[index - 1] !== undefined) {
          let moveLeft = weaponName[index - 1];
          weaponName[index - 1] = weaponName[index];
          weaponName[index] = moveLeft;
        } else if (
          direction == "Right" &&
          weaponName[index + 1] !== undefined
        ) {
          let moveRight = weaponName[index + 1];
          weaponName[index + 1] = weaponName[index];
          weaponName[index] = moveRight;
        }
        break;
      case "Check":
        let print = [];
        let output = "";
        for (let i = 0; i < weaponName.length; i++) {
          if (direction == "Even") {
            if (i % 2 == 0) {
              print.push(weaponName[i]);
            }
          } else {
            if (i % 2 !== 0) {
              print.push(weaponName[i]);
            }
          }
        }
        output = print.join(" ");
        console.log(output);
        break;
      case "Done":
        let result = weaponName.join("");
        console.log(`You crafted ${result}!`);
    }
  }
}
weaponsmith([
  "ha|Do|mm|om|er",
  "Move Right 0",
  "Move Left 3",
  "Check Odd",
  "Move Left 2",
  "Move Left 10",
  "Move Left 0",
  "Done"
]);
