function heroRecruitment(input) {
  let heroes = {};
  let actions = {
    enroll,
    learn,
    unlearn
  };
  for (const line of input) {
    if (line !== "End") {
      let info = line.split(" ");
      let action = info.shift().toLowerCase();
      actions[action](info.join(","));
    }
  }

  function enroll(name) {
    if (!heroes[name]) {
      heroes[name] = {
        spellBook: []
      };
    } else {
      console.log(`${name} is already enrolled.`);
    }
    return heroes;
  }

  function learn(name, spell) {
    if (!heroes.hasOwnProperty(name)) {
      console.log(`${name} doesn't exist.`);
    } else if (
      heroes.hasOwnProperty(name) &&
      !heroes[name]["spellBook"].includes(spell)
    ) {
      heroes[name]["spellBook"].push(spell);
    } else {
      console.log(`${name} has already learnt ${spell}.`);
    }

    return heroes;
  }

  function unlearn(name, spell) {
    if (
      heroes.hasOwnProperty(name) &&
      heroes[name]["spellBook"].includes(spell)
    ) {
      let index = heroes[name]["spellBook"].indexOf(spell);
      heroes[name]["spellBook"].splice(index, 1);
    } else if (heroes.hasOwnProperty(name)) {
      console.log(`${name} doesn't know ${spell}.`);
    } else {
      console.log(`${name} doesn't exist.`);
    }
  }
  console.log("Heroes:");

  //   Object.keys(heroes)
  //     .sort(
  //       (a, b) =>
  //         heroes[b]["spellBook"].length - heroes[a]["spellBook"].length ||
  //         a.localeCompare(b)
  //     )
  //     .forEach(heroe => {
  //       console.log(`== ${heroe}: ${heroes[heroe]["spellBook"].join(", ")}`);
  //     });

  let sortedHeroes = Object.entries(heroes).sort(sorting);
  for (const [heroe, spell] of sortedHeroes) {
    console.log(`== ${heroe}: ${spell["spellBook"].join(", ")}`);
  }

  function sorting(heroe1, heroe2) {
    let [name1, spells1] = heroe1;
    let [name2, spells2] = heroe2;

    if (spells1["spellBook"].length == spells2["spellBook"].length) {
      return name1.localeCompare(name2);
    } else {
      return spells2["spellBook"].length - spells1["spellBook"].length;
    }
  }
}
heroRecruitment([
  "Enroll Stefan",
  "Enroll Pesho",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stamat ItShouldNotWork",
  "Unlearn Gosho Dispel",
  //"Unlearn Stefan ItShouldWork",
  "End"
]);
