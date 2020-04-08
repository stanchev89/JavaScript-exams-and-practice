function solve(input) {
  let firstTime = Number(input.shift());
  let secondTime = Number(input.shift());
  let thirdTime = Number(input.shift());
  let overall = firstTime + secondTime + thirdTime;
  let minutes = Math.trunc(overall / 60);
  let seconds = overall % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let output = `${minutes}:${seconds}`;

  console.log(output);
}
solve(["50", "50", "49"]);
