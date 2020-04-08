function messageTranslator(input) {
  let countMesages = input.shift();
  for (let i = 0; i < countMesages; i++) {
    let currentMessage = input[i];
    let validation = /\!(?<com>[A-Z][a-z]{2,})\!:\[(?<msg>[a-zA-Z]{8,})\]/g;
    let command = "";
    if (currentMessage.match(validation)) {
      let regExMessage = validation.exec(currentMessage);
      let message = regExMessage["groups"]["msg"];
      let command = regExMessage["groups"]["com"];
      let output = [];
      for (const char of message) {
        output.push(char.charCodeAt());
      }
      console.log(`${command}: ${output.join(" ")}`);
    } else {
      console.log("The message is invalid");
    }
  }
}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready]"]);
