function netherRealms(input) {
  let demonsRegEx = /[^0-9.\/+*-]/g;
  let demons = {};
  for (let line of input) {
    line = line.split(",");
    for (let curName of line) {
      curName = curName.trim();
      let allLetters = curName.match(demonsRegEx);
      let totalHealth = 0;

      for (const demon of allLetters) {
        totalHealth += demon.charCodeAt();
      }
      let damage = calcDamage(curName);
      demons[curName] = {
        health: [Number(totalHealth)],
        damage: [damage]
      };
    }
  }

  let sortDemons = Object.keys(demons)
    .sort((a, b) => a.localeCompare(b))
    .forEach(demon => {
      console.log(
        `${demon} - ${demons[demon]["health"]} health, ${demons[demon]["damage"]} damage`
      );
    });

  function calcDamage(name) {
    let nameNumbers = name.match(/[+-]?\d+\.?\d*/g);
    let baseDamage = 0;
    let multiply = name.match(/\*/g);
    let divide = name.match(/\//g);
    if (nameNumbers !== null) {
      for (const num of nameNumbers) {
        let fixTheNum = num.match(/[\+\-]?\d*[\.\d]+/g);
        baseDamage += Number(fixTheNum[0]);
      }
      if (multiply !== null) {
        for (let i = 0; i < multiply.length; i++) {
          baseDamage *= 2;
        }
      }
      if (divide !== null) {
        for (let i = 0; i < divide.length; i++) {
          baseDamage /= 2;
        }
      }
    }
    return Number(baseDamage).toFixed(2);
  }
}
netherRealms(["M3ph+-0.5s-0.5t0.0**"]);
