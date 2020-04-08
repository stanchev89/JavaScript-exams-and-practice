function bonusScoringSystem(input) {
  let studentsCount = Number(input.shift());
  let lecturesCount = Number(input.shift());
  let bonus = Number(input.shift());
  let maxBonus = 0;
  let maxAttend = 0;
  for (const data of input) {
    let curStudentAttend = Number(data);
    let curBonus = (curStudentAttend / lecturesCount) * (5 + bonus);
    if (curBonus > maxBonus) {
      maxBonus = curBonus;
      maxAttend = curStudentAttend;
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttend} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
