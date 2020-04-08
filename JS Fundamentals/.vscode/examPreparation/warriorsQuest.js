function warriorsQuest(input) {
  let keyWord = input.shift();
  let actions = {
    defensivestance,
    gladiatorstance,
    dispel,
    target
  };
  for (let line of input) {
    if (line !== "For Azeroth") {
      line = line.split(" ");
      let validation = [
        "GladiatorStance",
        "DefensiveStance",
        "Dispel",
        "Target"
      ];
      let command = line.shift();
      if (!validation.includes(command)) {
        console.log("Command doesn't exist!");
        continue;
      } else {
        command = command.toLowerCase();
      }
      actions[command](...line);
    } else {
      break;
    }
  }
  function defensivestance() {
    keyWord = keyWord.toLowerCase();
    console.log(keyWord);

    return keyWord;
  }
  function gladiatorstance() {
    keyWord = keyWord.toUpperCase();
    console.log(keyWord);

    return keyWord;
  }
  function dispel(index, letter) {
    index = Number(index);
    if (keyWord[index] !== undefined) {
      keyWord = keyWord.replace(keyWord[index], letter[0]);
      console.log("Success!");
    } else {
      console.log("Dispel too weak.");
    }

    return keyWord;
  }
  function target(type, subkeyWording, replacer) {
    if (type === "Change" && keyWord.includes(subkeyWording)) {
      if (keyWord.includes(subkeyWording)) {
        keyWord = keyWord.replace(subkeyWording, replacer);
        console.log(keyWord);
      }
    } else if (type === "Remove" && keyWord.includes(subkeyWording)) {
      keyWord = keyWord.replace(subkeyWording, "");
      console.log(keyWord);
    } else {
      console.log("Command doesn't exist!");
    }

    return keyWord;
  }
}
warriorsQuest([
  "fr1c710n",
  "GladiatorStance",
  "Dispel 2 I",
  "Dispel 4 T",
  "Dispel 6 O",
  "Dispel 5 I",
  "Dispel 10 I",
  "Target Change RICTION riction",
  "For Azeroth"
]);
