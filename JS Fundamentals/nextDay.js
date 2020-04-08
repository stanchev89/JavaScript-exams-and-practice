function nextDay(year, month, day) {
  if (year == 1) {
    year = 1901;
  }
  let fullDate = `${year}-${month}-${day}`;
  fullDate = new Date(fullDate);
  fullDate.setDate(fullDate.getDate() + 1);
  let newDay = fullDate.getDate();
  let newMonth = fullDate.getMonth();
  let newYear = fullDate.getFullYear();
  let newDate = `${newYear}-${newMonth + 1}-${newDay}`;

  console.log(newDate);
}
nextDay(1, 1, 1);
