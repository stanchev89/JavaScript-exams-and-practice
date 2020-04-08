function wizardPoker(input) {
  let allCards = input.shift().split(":");
  let deck = [];

  for (const line of input) {
    let [command, card, position] = line.split(" ");
    action(command, card, position);
  }
  function action(command, card, position) {
    switch (command) {
      case "Add":
        if (allCards.includes(card)) {
          deck.push(card);
        } else {
          console.log("Card not found.");
        }
        break;
      case "Insert":
        if (allCards.includes(card) && deck[position] !== undefined) {
          deck.splice(position, 0, card);
        } else {
          console.log("Error!");
        }
        break;
      case "Remove":
        if (deck.includes(card)) {
          deck.splice(deck.indexOf(card), 1);
        } else {
          console.log("Card not found.");
        }
        break;
      case "Swap":
        let swap1 = deck.indexOf(position);
        let swap2 = deck.indexOf(card);
        deck[swap1] = card;
        deck[swap2] = position;
        break;
      case "Shuffle":
        let output = [];
        let counter = deck.length - 1;
        for (let i = 0; i < deck.length; i++) {
          output.push(deck[counter]);
          counter--;
        }
        deck = output;
        break;
      case "Ready":
        console.log(deck.join(" "));
        break;
    }
    return deck;
  }
}
wizardPoker([
  "Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
  "Remove Pounce",
  "Add Pounce",
  "Remove Pounce",
  "Add Wrath",
  "Add Pounce",
  "Shuffle deck",
  "Shuffle deck",
  "Ready"
]);
