function solve(input) {
  let actorName = input.shift();
  let academyPoints = +input.shift();
  let raters = +input.shift();
  let raterName = "";
  let currentPoints = 0;
  let points = academyPoints;
  let target = 1250.5;
  let diff = 0;
  for (let i = 1; i <= raters; i++) {
    raterName = input.shift();
    currentPoints = +input.shift();
    points += (currentPoints * raterName.length) / 2;
    if (points >= target) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  diff = target - points;
  if (points < target) {
    console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
  }
}
solve([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
  "",
  "",
  "",
  "",
  ""
]);
