function arenaTier(input) {
  let gladiators = {};
  input.forEach(line => {
    line = line.split(" ");
    if (line[1] == "->") {
      let name = line[0];
      let skill = line[2];
      let level = Number(line[4]);
      if (!gladiators.hasOwnProperty(name)) {
        gladiators[name] = {
          [skill]: level
        };
      } else {
        if (gladiators[name].hasOwnProperty(skill)) {
          if (gladiators[name][skill] < level) {
            gladiators[name][skill] = level;
          }
        } else {
          gladiators[name][skill] = level;
        }
      }
    } else if (line[1] == "vs") {
      let opponent1 = line[0];
      let opponent2 = line[2];
      if (
        gladiators.hasOwnProperty(opponent1) &&
        gladiators.hasOwnProperty(opponent2)
      ) {
        let skills1 = Array.from(Object.keys(gladiators[opponent1]));
        let skills2 = Array.from(Object.keys(gladiators[opponent2]));
        let points1 = 0;
        let points2 = 0;
        for (const challange of skills1) {
          if (skills2.includes(challange)) {
            points1 += gladiators[opponent1][challange];
            points2 += gladiators[opponent2][challange];
          }
        }
        if (points1 !== points2) {
          let loser = Math.min(points1, points2);
          loser == points1 ? (loser = opponent1) : (loser = opponent2);
          delete gladiators[loser];
        }
      }
    } else {
      for (const key in gladiators) {
        let points = 0;
        for (const skill in gladiators[key]) {
          points += gladiators[key][skill];
        }
        gladiators[key]["points"] = points;
      }
    }
  });

  Object.entries(gladiators)
    .sort((a, b) => b[1].points - a[1].points || a[0].localeCompare(b[0]))
    .forEach(element => {
      console.log(`${element[0]}: ${element[1].points} skill`);
      delete element[1].points;
      Object.entries(element[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(skill => {
          console.log(` - ${skill[0]} <!> ${skill[1]}`);
        });
    });
}
arenaTier([
  "Pesho -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar"
]);
