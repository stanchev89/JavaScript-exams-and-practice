function solve(input) {
  let nEggs = +input[0];
  let reds = 0;
  let oranges = 0;
  let blues = 0;
  let greens = 0;
  let maxEggs = Number.MIN_SAFE_INTEGER;
  let maxColour = "";
  for (let i = 1; i <= nEggs; i++) {
    let currentEgg = input[i];
    switch (currentEgg) {
      case "red":
        reds++;
        if (reds > maxEggs) {
          maxEggs = reds;
          maxColour = "red";
        }
        break;
      case "orange":
        oranges++;
        if (oranges > maxEggs) {
          maxEggs = oranges;
          maxColour = "orange";
        }
        break;
      case "blue":
        blues++;
        if (blues > maxEggs) {
          maxEggs = blues;
          maxColour = "blue";
        }
        break;
      case "green":
        greens++;
        if (greens > maxEggs) {
          maxEggs = greens;
          maxColour = "green";
        }
        break;
    }
  }
  console.log(`Red eggs: ${reds}`);
  console.log(`Orange eggs: ${oranges}`);
  console.log(`Blue eggs: ${blues}`);
  console.log(`Green eggs: ${greens}`);
  console.log(`Max eggs: ${maxEggs} -> ${maxColour}`);
}
solve(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
