function passwordValidator(input) {
  if (typeof input !== "string") {
    input = input.toString();
  }
  let isLetterAndDigit = pass => {
    let isTrue = true;
    for (const char of pass) {
      let currentAscii = char.charCodeAt();
      if (
        (48 <= currentAscii && currentAscii <= 57) ||
        (65 <= currentAscii && currentAscii <= 90) ||
        (97 <= currentAscii && currentAscii <= 122)
      ) {
      } else {
        isTrue = false;
        break;
      }
    }
    return isTrue;
  };
  let isWith2digits = pass => {
    let counter = 0;
    let isTrue = false;
    for (const char of pass) {
      if (Number(char) || char == "0") {
        counter++;
        if (counter >= 2 && counter <= 10) {
          isTrue = true;
          break;
        }
      }
    }
    return isTrue;
  };
  let isLengthLegit = pass => {
    isTrue = false;
    if (6 <= pass.length && pass.length) {
      isTrue = true;
    }
    return isTrue;
  };

  if (isLengthLegit(input) == false) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (isLetterAndDigit(input) == false) {
    console.log("Password must consist only of letters and digits");
  }

  if (isWith2digits(input) == false) {
    console.log("Password must have at least 2 digits");
  }

  if (
    isLengthLegit(input) == true &&
    isLetterAndDigit(input) == true &&
    isWith2digits(input) == true
  ) {
    console.log("Password is valid");
  }
}
passwordValidator("qwertyui20");
