function solve(input) {
  let passenger = +input[0];
  let stops = +input[1];
  let end = stops * 2 + 1;
  let evenOddCounter = 0;
  for (i = 2; i <= end; i++) {
    if (i % 2 == 0) {
      let minus = +input[i];
      passenger -= minus;
      evenOddCounter++;
      if (evenOddCounter % 2 == 0) {
        passenger -= 2;
      }
    } else {
      let plus = +input[i];
      passenger += plus;
      if (evenOddCounter % 2 !== 0) {
        passenger += 2;
      }
    }
  }
  console.log(`The final number of passengers is : ${passenger}`);
}
solve(["25", "5", "14", "15", "9", "11", "10", "13", "6", "7", "10", "8"]);
