function rightPlace(string1, char, string2) {
  let newString = "";
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== "_") {
      newString += string1[i];
    } else {
      newString += char;
    }
  }
  if (newString === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "i", "String");
