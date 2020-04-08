function inventory(input) {
  let inputHeroes = input.slice();
  let heroesItems = "";
  let output = [];
  for (let i = 0; i < inputHeroes.length; i++) {
    let heroe = {};
    inputHeroes[i] = inputHeroes[i].split(" / ");
    let heroesName = inputHeroes[i].shift();
    let level = Number(inputHeroes[i].shift());
    heroesItems = inputHeroes[i];
    heroesItems = heroesItems.toString();
    heroesItems = heroesItems.split(", ");
    heroesItems.sort();
    heroesItems = heroesItems.join(", ");
    heroe.name = heroesName;
    heroe.level = level;
    heroe.items = heroesItems;
    output.push(heroe);
  }

  let sortLevel = [];

  for (let index = 0; index < output.length; index++) {
    sortLevel.push(output[index].level);
  }
  sortLevel.sort((a, b) => a - b);

  while (output.length > 0) {
    let currentLevel = sortLevel.shift();
    for (let index = 0; index < output.length; index++) {
      if (output[index].level == currentLevel) {
        console.log(`Hero: ${output[index].name}`);
        console.log(`level => ${output[index].level}`);
        console.log(`items => ${output[index].items}`);
        output.splice(index, 1);
      }
    }
  }
}
inventory([
  "Isacc / 25 / ",
  "Derek / 3 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara"
]);
