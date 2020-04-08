function solve(input) {
  let maxPoorGrade = +input[0];
  let output = "";
  let output1 = "";
  let output2 = "";
  let numberProblems = 0;
  let lastProblem = "";
  let averageGrade = 0;
  let poorGrades = 0;
  let sumGrades = 0;
  let currentGrade = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== "Enough") {
      if (i % 2 == 0) {
        currentGrade = +input[i];
        numberProblems++;
        sumGrades += currentGrade;
        averageGrade = sumGrades / numberProblems;
        if (currentGrade <= 4) {
          poorGrades++;
          if (poorGrades >= maxPoorGrade) {
            output = `You need a break, ${poorGrades} poor grades.`;
            break;
          }
        }
      } else {
        lastProblem = input[i];
      }
    } else {
      output = `Average score: ${averageGrade.toFixed(2)}`;
      output1 = `Number of problems: ${numberProblems}`;
      output2 = `Last problem: ${lastProblem}`;
    }
  }

  console.log(output);
  if (output1 !== "") {
    console.log(output1);
    console.log(output2);
  }
}
solve([
  "3",
  "Money",
  "6",
  "Story info",
  "4",
  "Best Player",
  "5",
  "Bus",
  "6",
  "Enough"
]);
