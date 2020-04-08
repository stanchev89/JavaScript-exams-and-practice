function solve(input) {
  let n = +input[0];
  let maxRating = Number.MIN_SAFE_INTEGER;
  let minRating = Number.MAX_SAFE_INTEGER;
  let maxMovie = "";
  let minMovie = "";
  let avgRating = 0;
  let currRating = 0;
  let name = "";
  //console.log(minRating);
  for (let i = 1; i <= n * 2; i++) {
    let entry = input[i];
    if (i % 2 != 0) {
      name = entry;
    } else {
      currRating = Number(entry);
      avgRating += currRating;
      if (currRating < minRating) {
        minRating = currRating;
        minMovie = name;
      }
      if (currRating > maxRating) {
        maxRating = currRating;
        maxMovie = name;
      }
    }
  }
  avgRating = (avgRating / n).toFixed(1);
  console.log(`${maxMovie} is with highest rating: ${maxRating.toFixed(1)}`);
  console.log(`${minMovie} is with lowest rating: ${minRating.toFixed(1)}`);
  console.log(`Average rating: ${avgRating}`);
}
solve(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);
