function solve(input) {
  let tabs = +input[0];
  let salary = +input[1];
  let penalty = 0;
  let output = "";
  for (let i = 2; i <= tabs + 1; i++) {
    let webSite = input[i];
    if (webSite.toLowerCase() === "facebook") {
      penalty += 150;
    } else if (webSite.toLowerCase() === "instagram") {
      penalty += 100;
    } else if (webSite.toLowerCase() === "reddit") {
      penalty += 50;
    }
    if (penalty >= salary) {
      output = "You have lost your salary.";
      break;
    } else {
      output = salary - penalty;
    }
  }
  console.log(output);
}
solve(["3", "500", "Facebook", "Stackoverflow.com", "reddit"]);
