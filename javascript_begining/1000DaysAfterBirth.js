function daysAfterBirth([arg1]) {
  let input = arg1;
  let inputArray = input.split("-");
  let day = inputArray[0];
  let month = inputArray[1];
  let year = inputArray[2];
  let birthdate = `${year},${month},${day}`;
  let formatDate = new Date(birthdate);
  let newdate = new Date(formatDate.setDate(formatDate + 1000));
  let dayOutput = newdate.getDate();
  let monthOutput = newdate.getMonth() + 1;
  let yearOutput = newdate.getFullYear();
  newdate = `${dayOutput}-${monthOutput}-${yearOutput}`;
  if (monthOutput < 10) {
    month = "0" + month;
  }
  if (dayOutput < 10) {
    day = "0" + day;
  }
  console.log(newdate);
}
daysAfterBirth(["25-02-1995"]);
