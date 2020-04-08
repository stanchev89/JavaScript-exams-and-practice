function nikuldensMeal(input) {
  let guestList = {};
  let unlikeCounter = 0;
  for (let line of input) {
    if (line !== "Stop") {
      line = line.split("-");
      let [rate, guest, meal] = line;
      if (rate === "Like") {
        if (!guestList.hasOwnProperty(guest)) {
          guestList[guest] = [meal];
        } else {
          if (!guestList[guest].includes(meal)) {
            guestList[guest].push(meal);
          }
        }
      } else if (rate === "Unlike") {
        if (guestList.hasOwnProperty(guest)) {
          if (guestList[guest].includes(meal)) {
            unlikeCounter++;
            let indexOfMeal = guestList[guest].indexOf(meal);
            guestList[guest].splice(indexOfMeal, 1);
            console.log(`${guest} doesn't like the ${meal}.`);
          } else {
            console.log(
              `${guest} doesn't have the ${meal} in his/her collection.`
            );
          }
        } else {
          console.log(`${guest} is not at the party.`);
        }
      }
    }
  }
  let sortGuests = Object.keys(guestList)
    .sort(
      (a, b) => guestList[b].length - guestList[a].length || a.localeCompare(b)
    )
    .forEach(guest => {
      console.log(`${guest}: ${guestList[guest].join(", ")}`);
    });
  console.log(`Unliked meals: ${unlikeCounter}`);
}
nikuldensMeal([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Misho-salad",
  "Like-Pena-dessert",
  "Stop"
]);
