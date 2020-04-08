function race(input) {
  let racers = {};
  let participants = input.shift().split(", ");

  for (const line of input) {
    if (line !== "end of race") {
      let racerRegex = /[a-zA-Z]/g;
      let curRacer = line.match(racerRegex).join("");
      let distanceNums = line.match(/[0-9]/g);
      let curDistance = 0;
      for (const num of distanceNums) {
        curDistance += Number(num);
      }
      if (participants.includes(curRacer)) {
        if (racers.hasOwnProperty(curRacer)) {
          let oldData = racers[curRacer];
          racers[curRacer] = curDistance + oldData;
        } else {
          racers[curRacer] = curDistance;
        }
      }
    } else {
      break;
    }
  }
  let sortedRacers = Object.keys(racers).sort((a, b) => {
    return racers[b] - racers[a];
  });
  console.log(`1st place: ${sortedRacers.shift()}`);
  console.log(`2nd place: ${sortedRacers.shift()}`);
  console.log(`3rd place: ${sortedRacers.shift()}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race"
]);
