function solve(input) {
  let output = "";
  let maxPoints = Number.MIN_SAFE_INTEGER;
  let bestMovie = "";
  for (i = 0; i < 7; i++) {
    let movie = input[i];
    let total = 0;
    let ascii = 0;
    if (movie !== "STOP") {
      for (a = 0; a < movie.length; a++) {
        let letter = movie[a];
        ascii = letter.charCodeAt(0);
        ascii = Number(ascii);
        if (ascii >= 62 && ascii <= 90) {
          ascii -= movie.length;
        } else if (ascii >= 97 && ascii <= 122) {
          ascii -= 2 * movie.length;
        }
        total += ascii;
      }
      if (total > maxPoints) {
        maxPoints = total;
        bestMovie = movie;
      }
    } else {
      output = `The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`;
      break;
    }
    if (i == 6 && movie !== "STOP") {
      console.log("The limit is reached.");
      output = `The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`;
    }
  }
  console.log(output);
}
solve([
  "Matrix",
  "Breaking bad",
  "Area 51",
  "Legend",
  "STOP",
  "Harry Potter",
  "Wizards"
]);
