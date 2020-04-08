function solve(input) {
  let matchCounter = 0;
  let wins = 0;
  let loses = 0;
  for (i = 0; i <= input.length + 1; i++) {
    let nameTournament = input.shift();
    let nMatches = +input.shift();
    if (nameTournament !== "End of tournaments") {
      for (let matches = 1; matches <= nMatches; matches++) {
        matchCounter++;
        let pointsDesyTeam = +input.shift();
        let awayPoints = +input.shift();
        let diff = Math.abs(pointsDesyTeam - awayPoints);
        if (pointsDesyTeam > awayPoints) {
          wins++;
          console.log(
            `Game ${matches} of tournament ${nameTournament}: win with ${diff} points.`
          );
        } else {
          loses++;
          console.log(
            `Game ${matches} of tournament ${nameTournament}: lost with ${diff} points.`
          );
        }
      }
    } else {
      let percentWin = (wins / matchCounter) * 100;
      let percentLost = (loses / matchCounter) * 100;
      console.log(`${percentWin.toFixed(2)}% matches win`);
      console.log(`${percentLost.toFixed(2)}% matches lost`);
    }
  }
}
solve([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments"
]);
