function catalogue(input) {
  let storage = [];
  let firstLetters = [];
  let itemNames = [];

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    currentLine = currentLine.split(" : ");
    let currentObj = {};
    currentObj.name = currentLine[0];
    itemNames.push(currentObj.name.toLowerCase());
    firstLetters.push(currentObj.name[0]);
    currentObj.price = Number(currentLine[1]);
    storage.push(currentObj);
  }
  itemNames.sort();
  firstLetters.sort();
  for (let i = 0; i < firstLetters.length; i++) {
    let currentLetter = firstLetters[i];
    if (currentLetter === firstLetters[i - 1]) {
      firstLetters.splice(i, 1);
      i--;
    }
  }

  while (firstLetters.length > 0) {
    let currentLetter = firstLetters.shift();
    console.log(currentLetter);

    for (let index = 0; index < storage.length; index++) {
      let currentItem = itemNames[index];
      for (let x = 0; x < storage.length; x++) {
        let nameToLowerCase = storage[x].name.toLowerCase();
        if (
          currentItem == nameToLowerCase &&
          currentItem[0] == currentLetter.toLowerCase()
        ) {
          console.log(`  ${storage[x]}: ${storage[x].price}`);
        }
      }
    }
  }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "Tv : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10"
]);
