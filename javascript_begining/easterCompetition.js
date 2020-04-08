function solve(input) {
  let nEasterBreads = +input[0];
  let currentRating = 0;
  let maxPoints = Number.MIN_SAFE_INTEGER;
  let winner = "";
  let chefName = "";
  for (let i = 1; i <= input.length; i++) {
    let entry = input[i];
    if (entry != Number(entry) && entry !== "Stop") {
      chefName = entry;
    } else if (entry == Number(entry)) {
      entry = Number(entry);
      currentRating += entry;
    } else if (entry === "Stop") {
      console.log(`${chefName} has ${currentRating} points.`);
      if (currentRating > maxPoints) {
        maxPoints = currentRating;
        console.log(`${chefName} is the new number 1!`);
        winner = chefName;
      }
      currentRating = 0;
    }
  }
  console.log(`${winner} won competition with ${maxPoints} points!`);
}
solve([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop"
]);
