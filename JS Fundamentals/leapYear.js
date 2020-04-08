function leapYear(year) {
  let isLeap = false;
  if (year % 4 == 0) {
    isLeap = true;
  }
  if (year % 100 == 0) {
    isLeap = false;
  }
  if (year % 400 == 0) {
    isLeap = true;
  }
  if (isLeap == true) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
leapYear(408);
