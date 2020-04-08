function schoolRegister(input) {
  let allStudents = [];
  for (const line of input) {
    let currentStudent = {};
    let info = [];
    let studentData = line.split(",");
    for (const part of studentData) {
      let currentData = part.split(": ");
      info.push(currentData[1]);
    }
    let [name, grade, avgScore] = info;
    currentStudent.name = name;
    currentStudent.grade = Number(grade);
    currentStudent.avgScore = Number(avgScore);

    if (currentStudent.avgScore >= 3) {
      currentStudent.grade++;
      allStudents.push(currentStudent);
    }
  }
  let grades = [];
  allStudents.forEach(student => {
    if (!grades.includes(student.grade)) {
      grades.push(student.grade);
    }
  });
  grades.sort((a, b) => a - b);
  grades.forEach(grade => {
    let listStudents = [];
    let avgGrade = 0;
    console.log(`${grade} Grade`);
    for (let i = 0; i < allStudents.length; i++) {
      if (allStudents[i].grade == grade) {
        listStudents.push(allStudents[i].name);
        avgGrade += allStudents[i].avgScore;
      }
    }
    avgGrade /= listStudents.length;
    console.log(`List of students: ${listStudents.join(", ")}`);
    console.log(`Average annual grade from last year: ${avgGrade.toFixed(2)}`);
    console.log(" ");
  });
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
