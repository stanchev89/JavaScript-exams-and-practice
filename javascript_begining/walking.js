function solve(input) {
  let goalSteps = 10000;
  let output = "";
  let data = "";
  let sumSteps = 0;
  let diff = 0;
  for (let i = 0; i < input.length; i++) {
    data = input[i];
    if (data !== "Going home") {
      data = parseInt(data);
      sumSteps += data;
      if (sumSteps >= goalSteps) {
        output = "Goal reached! Good job!";
      } else {
        diff = goalSteps - sumSteps;
        output = `${diff} more steps to reach goal.`;
      }
    }
  }
  console.log(output);
}
solve(["1500", "300", "2500", "3000", "Going home", "200"]);
