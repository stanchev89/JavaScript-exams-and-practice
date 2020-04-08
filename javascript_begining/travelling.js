function solve(input) {
  let budget = 0;
  let saveMoney = 0;
  let destination = "";
  let sumSaves = 0;
  let counterForBudget = 0; // to separate budget from saves
  for (i = 0; i <= input.length; i++) {
    let inputs = input[i];
    if (inputs != Number(inputs)) {
      destination = inputs;
      if (destination == "End") {
        break;
      }
    } else {
      counterForBudget++;
      if (counterForBudget == 1) {
        budget = Number(inputs);
      } else {
        saveMoney = Number(inputs);
        sumSaves += saveMoney;
        if (sumSaves >= budget) {
          console.log(`Going to ${destination}!`);
          saveMoney = 0;
          sumSaves = 0;
          counterForBudget = 0;
        }
      }
    }
  }
}

solve([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End"
]);
