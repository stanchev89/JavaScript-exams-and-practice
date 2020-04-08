function loadingBar(input) {
  let inputNumber = Number(input);
  let firstNumInput = 0;
  if (inputNumber < 10) {
    firstNumInput = 1;
  } else {
    firstNumInput = Math.trunc(inputNumber / 10);
  }

  let barArray = firstNum => {
    let emptyBar = [];
    for (let i = 0; i < 10; i++) {
      emptyBar[i] = ".";
    }
    let fillTheBar = emptyBar;
    for (let i = 0; i < firstNum; i++) {
      fillTheBar[i] = "%";
    }

    return fillTheBar;
  };
  barArray(firstNumInput);

  let filledBarArray = barArray(firstNumInput);
  let completeBar = "";

  for (let i = 0; i < filledBarArray.length; i++) {
    completeBar += filledBarArray[i];
  }
  completeBar = `[${completeBar}]`;
  if (inputNumber < 100) {
    console.log(`${inputNumber}% ${completeBar}`);
    console.log("Still loading...");
  } else {
    console.log(`${inputNumber}% Complete!`);
    console.log(completeBar);
  }
}
loadingBar(65);
