function starEnigma(input) {
  let count = input.shift();
  let attackedPlanets = [];
  let destroyedPlanets = [];
  let keyChars = /[sS tT aA rR]/g;
  for (let i = 0; i < count; i++) {
    let line = input[i];
    let curKeys = line.match(keyChars).length;
    let transformed = "";
    for (let i = 0; i < line.length; i++) {
      let curCharCode = Number(line[i].charCodeAt());
      curCharCode -= curKeys;
      transformed += String.fromCharCode(curCharCode);
    }

    let validation = /@([a-zA-Z\s]+)[^@\-\!:>]*:(\d+)[^@\-\!:>]*\!([A D])\![^@\-\!:>]*->(\d+)/g;

    if (transformed.match(validation)) {
      let planetName = /@([a-zA-Z]+)/g.exec(transformed)[1];
      let population = Number(/:(\d+)/g.exec(transformed)[1]);
      let action = /\!([A D])/g.exec(transformed)[1];
      let soldiers = Number(/->(\d+)/g.exec(transformed)[1]);

      action === "A"
        ? attackedPlanets.push(planetName)
        : destroyedPlanets.push(planetName);
    }
  }
  if (attackedPlanets.length > 0) {
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort();
    for (const planet of attackedPlanets) {
      console.log(`-> ${planet}`);
    }
  } else {
    console.log("Attacked planets: 0");
  }
  if (destroyedPlanets.length > 0) {
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort();
    for (const planet of destroyedPlanets) {
      console.log(`-> ${planet}`);
    }
  } else {
    console.log("Destroyed planets: 0");
  }
}
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
  "STCDoghudd4=63333$D$0A53333",
  "EHfsytsnhf?8555&I&2C9555SR"
]);
