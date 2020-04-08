function nikuldenCharity(input) {
  let text = input.shift();
  for (let line of input) {
    if (line !== "Finish") {
      line = line.split(" ");
      let action = line.shift();
      switch (action) {
        case "Replace":
          let curChar = line.shift();
          let replacer = line.shift();
          while (text.includes(curChar)) {
            text = text.replace(curChar, replacer);
          }
          console.log(text);

          break;
        case "Cut":
          let startIndex = line.shift();
          let endIndex = line.shift();
          if (text[startIndex] !== undefined && text[endIndex] !== undefined) {
            endIndex++;
            let firstPart = text.substring(0, startIndex);
            let secondPart = text.substring(endIndex, text.length);
            text = firstPart + secondPart;
            console.log(text);
          } else {
            console.log("Invalid indexes!");
          }
          break;
        case "Make":
          let type = line.shift();
          if (type == "Lower") {
            text = text.toLowerCase();
          } else {
            text = text.toUpperCase();
          }
          console.log(text);

          break;
        case "Check":
          let check = line.shift();
          if (text.includes(check)) {
            console.log(`Message contains ${check}`);
          } else {
            console.log(`Message doesn't contain ${check}`);
          }

          break;
        case "Sum":
          let sumFrom = line.shift();
          let sumTo = line.shift();
          if (text[sumFrom] !== undefined && text[sumTo] !== undefined) {
            sumTo++;
            let substring = text.substring(sumFrom, sumTo);
            let sumChars = 0;
            for (const char of substring) {
              sumChars += Number(char.charCodeAt());
            }
            console.log(sumChars);
          } else {
            console.log("Invalid indexes!");
          }

          break;
      }
    }
  }
}
nikuldenCharity([
  "Ha",
  "Replace p r",
  "Make Lower",
  "Cut 0 1",
  "Sum -2 2",
  "Finish"
]);
