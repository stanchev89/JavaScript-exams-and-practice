function solve(input) {
  let budget = +input[0];
  for (let i = 1; i <= input.length; i++) {
    let item = input[i];
    let ascii = 0;
    let letter = "";
    if (item !== "Stop") {
      for (let index = 0; index < item.length; index++) {
        letter = item[index];
        letter = letter.charCodeAt();
        letter = Number(letter);
        ascii += letter;
      }
      if (ascii <= budget) {
        console.log(`Item successfully purchased!`);
        budget -= ascii;
      } else {
        console.log(`Not enough money!`);
        break;
      }
    } else {
      console.log(`Money left: ${budget}`);
      break;
    }
  }
}
solve(["5000", "Christmas lights", "wreath", "Stop", "Tree stand"]);
