function army(input) {
  let armies = {};
  input.forEach(line => {
    let curLeader = "";
    let curArmyName = "";
    let curArmyCount = "";
    line = line.split(` `);
    if (!line.includes("+")) {
      if (isNaN(line[line.length - 1])) {
        let action = line[line.length - 1];
        line.pop();
        let curName = [...line];
        curLeader = curName.join(" ");
        switch (action) {
          case "arrives":
            armies[curLeader] = {};
            break;
          case "defeated":
            delete armies[curLeader];
        }
      } else {
        curArmyCount = Number(line[line.length - 1]);
        line.pop();
        line = String(line).split(":");
        line = String(line).split(",");
        for (let char in line) {
          if (line[char] == "") {
            line.splice(char, 1);
          }
        }
        curArmyName = line.pop();
        curLeader = line.join(" ");
        if (armies.hasOwnProperty(curLeader)) {
          armies[curLeader][curArmyName] = curArmyCount;
        }
      }
    } else {
      line = String(line).split(",+,");
      [curArmyName, curArmyCount] = line;
      curArmyCount = Number(curArmyCount);
      Object.keys(armies).forEach(element => {
        if (armies[element].hasOwnProperty(curArmyName)) {
          let oldCount = armies[element][curArmyName];
          armies[element][curArmyName] = curArmyCount + oldCount;
        }
      });
    }
  });

  for (const key in armies) {
    let total = 0;
    for (const count in armies[key]) {
      total += armies[key][count];
    }
    armies[key]["total"] = total;
  }

  let sortedLeaders = Object.keys(armies).sort(
    (a, b) => armies[b]["total"] - armies[a]["total"]
  );
  sortedLeaders.forEach(leader => {
    console.log(`${leader}: ${armies[leader]["total"]}`);
    delete armies[leader]["total"];
    Object.keys(armies[leader])
      .sort((a, b) => armies[leader][b] - armies[leader][a])
      .forEach(army => console.log(`>>> ${army} - ${armies[leader][army]}`));
  });
}
army([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205"
]);
