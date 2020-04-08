function solve(input) {
  let name = input.shift();
  let counter = 0;
  let sum = 0;
  let output = "";
  let avgRating = 0;
  let poor = 0;
  let poorClass = 0;
  let twelveClass = 0;
  while (input.length > 0 && counter <= 12) {
    counter++;
    let rating = +input.shift();
    if (rating < 3) {
      poor++;
      poorClass = counter;
      break;
    } else if (rating < 4) {
      counter--;
      rating = 0;
    }
    if (counter == 12 && rating >= 4) {
      twelveClass++;
    }
    sum += rating;
  }
  avgRating = sum / counter;
  if (twelveClass == 1) {
    output = `${name} graduated. Average grade: ${avgRating.toFixed(2)}`;
  } else {
    output = `${name} has been excluded at ${poorClass} grade`;
  }
  console.log(output);
}
solve([
  "Stefan",
  "4",
  "5.5",
  "6.00",
  "5.43",
  "4.50",
  "6",
  "2",
  "5",
  "2",
  "6",
  "5.43",
  "5"
]);
