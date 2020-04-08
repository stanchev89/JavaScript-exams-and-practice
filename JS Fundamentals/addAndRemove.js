function addAndRemove(input) {
  let initialNum = 1;
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "add") {
      output[i] = initialNum;
    } else if (input[i] === "remove") {
      output.pop();
    }

    initialNum++;
  }
  let result = "";
  for (let i = 0; i < output.length; i++) {
    if (output[i] !== undefined) {
      result += output[i] + " ";
    }
  }
  if (result == "") {
    result = "Empty";
  }
  console.log(result);
}
addAndRemove(["add", "remove", "remove", "remove", "add"]);
