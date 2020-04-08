function nameOfLastDigit(n) {
  let num = n.toString();
  let char = "";
  let output = "";
  for (let i = 0; i < num.length; i++) {
    char = num[i];
  }
  switch (char) {
    case "1":
      output = "one";
      break;
    case "2":
      output = "two";
      break;
    case "3":
      output = "three";
      break;
    case "4":
      output = "four";
      break;
    case "5":
      output = "five";
      break;
    case "6":
      output = "six";
      break;
    case "7":
      output = "seven";
      break;
    case "8":
      output = "eight";
      break;
    case "9":
      output = "nine";
      break;
    case "0":
      output = "zero";
      break;
  }
  console.log(output);
}
nameOfLastDigit(512);
