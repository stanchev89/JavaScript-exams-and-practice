function legendaryFarming(input) {
  input = input.split(" ");
  let isReady = false;
  let winner = "";
  let keyMaterials = {
    shards: 0,
    fragments: 0,
    motes: 0
  };
  let junk = {};
  while (input.length > 0) {
    let quantity = Number(input.shift());
    let material = input.shift().toLowerCase();
    if (keyMaterials.hasOwnProperty(material)) {
      let diff = 0;
      keyMaterials[material] += quantity;
      if (keyMaterials[material] >= 250) {
        diff = keyMaterials[material] - 250;
        isReady = true;
        winner = material;
        keyMaterials[material] = diff;
      }
      if (isReady) {
        break;
      }
    } else {
      let oldQuan = junk[material];
      junk.hasOwnProperty(material)
        ? (junk[material] = oldQuan + quantity)
        : (junk[material] = quantity);
    }
  }
  switch (winner) {
    case "shards":
      winner = "Shadowmourne";
      break;
    case "fragments":
      winner = "Valanyr";
      break;
    case "motes":
      winner = "Dragonwrath";
      break;
  }
  console.log(`${winner} obtained!`);
  Object.entries(keyMaterials)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(element => {
      console.log(`${element[0]}: ${element[1]}`);
    });
  Object.entries(junk)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(element => {
      console.log(`${element[0]}: ${element[1]}`);
    });
}
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
