function cardGame(input) {
  function calculateCards(arr) {
    let result = 0;
    arr.forEach(card => {
      let power = card[0];
      let multiplier = card[1];
      if (card.length > 2) {
        power = card[0] + card[1];
        multiplier = card[2];
      }
      if (!isNaN(Number(power))) {
        power = Number(power);
      } else {
        switch (power) {
          case "J":
            power = 11;
            break;
          case "Q":
            power = 12;
            break;
          case "K":
            power = 13;
            break;
          case "A":
            power = 14;
            break;
        }
      }
      switch (multiplier) {
        case "S":
          multiplier = 4;
          break;
        case "H":
          multiplier = 3;
          break;
        case "D":
          multiplier = 2;
          break;
        case "C":
          multiplier = 1;
          break;
      }
      result += power * multiplier;
    });
    return result;
  }
  let players = {};
  input.forEach(line => {
    let [name, cards] = line.split(": ");
    cards = cards.split(", ");
    for (let i = 0; i < cards.length; i++) {
      let currentCard = cards[i];
      for (let x = i + 1; x < cards.length; x++) {
        if (currentCard == cards[x]) {
          let index = cards.indexOf(cards[x]);
          cards.splice(index, 1);
          i--;
          break;
        }
      }
    }
    if (!players.hasOwnProperty(name)) {
      players[name] = cards;
    } else {
      cards.forEach(card => {
        if (!players[name].includes(card)) {
          players[name].push(card);
        }
      });
    }
  });
  let playerNames = Array.from(Object.keys(players));
  for (const player of playerNames) {
    console.log(`${player}: ${calculateCards(players[player])}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD"
]);
