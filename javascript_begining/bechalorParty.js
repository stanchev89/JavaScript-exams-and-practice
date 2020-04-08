function solve(input) {
  let honorarium = +input[0];
  let output = "";
  let couvertMax = 100;
  let couvertMin = 70;
  let sumGuests = 0;
  let price = 0;
  let diff = 0;
  for (i = 1; i <= i + 1; i++) {
    let guests = input[i];
    if (guests !== "The restaurant is full") {
      guests = Number(guests);
      sumGuests += guests;
      if (guests < 5) {
        price += guests * couvertMax;
      } else {
        price += guests * couvertMin;
      }
    } else {
      break;
    }
    if (price < honorarium) {
      output = `You have ${sumGuests} guests and ${price} leva income, but no singer.`;
    } else {
      diff = price - honorarium;
      output = `You have ${sumGuests} guests and ${diff} leva left.`;
    }
  }
  console.log(output);
}
solve(["3200", "5", "12", "6", "6", "12", "The restaurant is full"]);
