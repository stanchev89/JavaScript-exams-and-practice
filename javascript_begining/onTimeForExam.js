function solve(input) {
  let hForExam = +input.shift();
  let mForExam = +input.shift();
  let hArrive = +input.shift();
  let mArrive = +input.shift();
  let output1 = "";
  let output2 = "";
  let minutesExam = 0;
  let minutesArrive = 0;
  let diff = 0;
  let hh = 0;
  let mm = 0;
  minutesExam = hForExam * 60 + mForExam;
  minutesArrive = hArrive * 60 + mArrive;
  diff = minutesExam - minutesArrive;
  if (diff < 0) {
    output1 = "Late";
  } else if (diff <= 30) {
    output1 = "On time";
  } else {
    output1 = "Early";
  }
  if (diff > 0 && diff < 60) {
    output2 = `${diff} minutes before the start`;
  } else if (diff >= 60) {
    hh = Math.trunc(diff / 60);
    mm = diff % 60;
    if (mm < 10) {
      mm = "0" + mm;
    }
    output2 = `${hh}:${mm} hours before the start`;
  } else if (diff > -60) {
    output2 = `${-diff} minutes after the start`;
  } else if (diff <= -60) {
    diff = -diff;
    hh = Math.trunc(diff / 60);
    mm = diff % 60;
    if (mm < 10) {
      mm = "0" + mm;
    }
    output2 = `${hh}:${mm} hours after the start`;
  }
  console.log(output1);
  console.log(output2);
}
solve(["9", "30", "9", "50"]);
