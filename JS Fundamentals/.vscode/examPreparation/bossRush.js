function bossRush(input) {
  let numToCheck = Number(input.shift());
  let validation = /\|([A-Z]{4,})\|\:\#([a-zA-Z]+\s[a-zA-Z]+)\#/g;
  for (let i = 0; i < numToCheck; i++) {
    let currentBoss = input[i];
    let bossInfo = validation.exec(currentBoss);
    if (bossInfo !== null) {
      let name = bossInfo[1];
      let title = bossInfo[2];
      console.log(`${name}, The ${title}`);
      console.log(`>> Strength: ${name.length}`);
      console.log(`>> Armour: ${title.length}`);
    } else {
      console.log("Access denied!");
    }
  }
}
bossRush([
  "3",
  "|GEORGI|:#Lead architect#",
  "|Hristo|:#High Overseer#",
  "|STEFAN|:#Assistant Game Developer#"
]);
