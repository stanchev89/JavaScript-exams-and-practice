function dungeonestDark(input) {
  let stringInput = input.toString();
  let type = [];
  let quantity = [];
  let currentNum = "";
  let currentType = "";
  for (let index = 0; index < stringInput.length; index++) {
    if (stringInput[index] !== "|") {
      if (stringInput[index] != Number(stringInput[index])) {
        currentType += stringInput[index];
      } else if (
        stringInput[index] == Number(stringInput[index]) &&
        stringInput[index] !== " "
      ) {
        currentNum += stringInput[index];
      }
    } else {
      currentNum = Number(currentNum);
      type.push(currentType);
      quantity.push(currentNum);
      currentNum = "";
      currentType = "";
    }
  }
  currentNum = Number(currentNum);
  type.push(currentType);
  quantity.push(currentNum); // to here - input to arrays!

  let health = 100;
  let coins = 0;
  let death = false;
  let diffHealth = 0;
  for (let i = 0; i < type.length; i++) {
    if (type[i] === "potion") {
      if (health < 100) {
        diff = 100 - health;
        health += quantity[i];
      }
      if (health > 100) {
        health = 100;
        console.log(`You healed for ${diff} hp.`);
      } else {
        console.log(`You healed for ${quantity[i]} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (type[i] === "chest") {
      coins += quantity[i];
      console.log(`You found ${quantity[i]} bitcoins.`);
    } else {
      health -= quantity[i];
      if (health > 0) {
        console.log(`You slayed ${type[i]}.`);
      } else {
        death = true;
        console.log(`You died! Killed by ${type[i]}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }
  if (death == false) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
