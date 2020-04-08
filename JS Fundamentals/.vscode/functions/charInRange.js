function characterInRange(firstChar, secondChar) {
  let firstCharCode = firstChar.charCodeAt();
  let secondCharCode = secondChar.charCodeAt();
  let from = Math.min(firstCharCode, secondCharCode);
  from = Number(from);
  let to = Math.max(firstCharCode, secondCharCode);
  to = Number(to);
  let printFromTo = (from, to) => {
    let char = "";
    let result = "";

    for (let i = from + 1; i < to; i++) {
      char = String.fromCharCode(i);
      result += char + " ";
    }
    return result;
  };
  console.log(printFromTo(from, to));
}
characterInRange("s", "n");
