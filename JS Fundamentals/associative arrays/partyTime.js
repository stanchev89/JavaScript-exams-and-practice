function partyTime(input) {
  let guestList = {
    vip: [],
    regular: []
  };

  let comingGuests = [];
  let partyIsStarted = false;
  for (const code of input) {
    if (!partyIsStarted) {
      if (code == "PARTY") {
        partyIsStarted = true;
      } else {
        if (!isNaN(Number(code[0]))) {
          guestList.vip.push(code);
        } else {
          guestList.regular.push(code);
        }
      }
    } else {
      comingGuests.push(code);
    }
  }
  function output(obj, arr) {
    let invitedGuests = obj.vip.concat(obj.regular);
    for (const guest of arr) {
      if (invitedGuests.includes(guest)) {
        let index = invitedGuests.indexOf(guest);
        invitedGuests.splice(index, 1);
      }
    }
    let output = invitedGuests.length + "\n" + invitedGuests.join("\n");
    return output;
  }
  output(guestList, comingGuests);
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ"
]);
