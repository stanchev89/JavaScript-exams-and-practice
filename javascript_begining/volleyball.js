function solve(input) {
  let typeOfYear = input.shift().toLowerCase();
  let p = +input.shift();
  let wt = +input.shift();
  let weekendsPlay = 0;
  let overall = 0;
  let output = "";
  weekendsPlay = 48 - wt;
  weekendsPlay = weekendsPlay * 0.75;
  p = (2 / 3) * p;
  overall = p + weekendsPlay + wt;
  if (typeOfYear == "leap") {
    overall = Math.trunc(overall + overall * 0.15);
  }

  console.log(Math.trunc(overall));
}
solve(["leap", "100", "30"]);
