function solve(input) {
  let name = "";
  let counterInput = 0;
  let seats = 0;
  let counterType = 0;
  let kind = "";
  let students = 0;
  let standards = 0;
  let kids = 0;
  let totalTickets = 0;

  while (name !== "Finish") {
    for (i = 0; i < input.length; i++) {
      counterInput++;
      if (counterInput == 1) {
        name = input[i];
      } else if (counterInput == 2) {
        seats = +input[i];
      } else {
        if (counterType <= seats) {
          kind = input[i];
          counterType++;
          switch (kind) {
            case "student":
              students++;
              break;
            case "standard":
              standards++;
              break;
            case "kid":
              kids++;
              break;
            case "End":
              counterType--;
              console.log(
                `${name} - ${((counterType / seats) * 100).toFixed(2)}% full.`
              );
              counterInput = 0;
              counterType = 0;
              break;
          }
          if (counterType == seats) {
            console.log(
              `${name} - ${((counterType / seats) * 100).toFixed(2)}% full.`
            );
            counterInput = 0;
            counterType = 0;
          } else if (kind == "Finish") {
            break;
          }
        } else {
          console.log(
            `${name} - ${((counterType / seats) * 100).toFixed(2)}% full.`
          );
          counterInput = 0;
          counterType = 0;
        }
      }
    }
    totalTickets = students + standards + kids;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(
      `${((students / totalTickets) * 100).toFixed(2)}% student tickets.`
    );
    console.log(
      `${((standards / totalTickets) * 100).toFixed(2)}% standard tickets.`
    );
    console.log(`${((kids / totalTickets) * 100).toFixed(2)}% kids tickets.`);
  }
}
solve([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish"
]);
