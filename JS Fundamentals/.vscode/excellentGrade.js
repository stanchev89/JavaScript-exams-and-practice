function excellentGrade(grade) {
  if (grade >= 5.5 && grade <= 6) {
    console.log("Excellent");
  } else if (grade < 5.5 && grade >= 2) {
    console.log("Not excellent");
  } else {
    console.log("Invalid input");
  }
}
excellentGrade(2);
