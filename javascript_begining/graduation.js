function solve(input) {
  let name = input.shift();
  let counter = 0;
  let sum = 0;
  let output = "";
  let avgRating = 0;
  while (input.length > 0) {
    counter++;
    if (counter > 12) {
      break;
    }
    let rating = +input.shift();
    if (rating >= 4) {
      sum += rating;
      avgRating = sum.toFixed(2) / counter;
      output = `${name} graduated. Average grade: ${avgRating.toFixed(2)}`;
    } else {
      counter--;
    }
  }
  console.log(output);
}
