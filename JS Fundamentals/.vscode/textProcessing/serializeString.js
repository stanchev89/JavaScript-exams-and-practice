function serializeString([input]) {
  input = String(input);
  let pastChars = new Set();
  for (const key in input) {
    let currentChar = [];

    if (!pastChars.has(input[key])) {
      pastChars.add(input[key]);
      currentChar.push(key);
      for (let i = Number(key) + 1; i < input.length; i++) {
        if (input[i] == input[key]) {
          currentChar.push(i);
        }
      }
      console.log(`${input[key]}:${currentChar.join("/")}`);
    }
  }
}
serializeString(["avjavamsdmcalsdm", ""]);
