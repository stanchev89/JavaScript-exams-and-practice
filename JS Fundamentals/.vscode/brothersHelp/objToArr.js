function objToArr(obj) {
  let data = Object.entries(obj);
  let result = [];
  let regexError = false;
  for (const line of data) {
    let [key, value] = line;
    if (key === "regex") {
      key = "match";
    }
    if (key === "regexErrorMsg") {
      regexError = true;
    }
    regexError
      ? result[result.length - 1].push({ [key]: value })
      : result.push([`${key}`, [value]]);
    regexError = false;
  }

  return result;
}

objToArr({
  min: 10,
  max: 20,
  regex: "/^([0-9]\\d{0,2}|1000)$/",
  regexErrorMsg: "Value must be between 0 and 1000."
});
