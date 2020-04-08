function gladiatorInventori(input) {
  let inventory = input[0].split(" ");
  let actions = input.slice();
  actions.shift();
  for (let i = 0; i < actions.length; i++) {
    actions[i] = actions[i].split(" ");
  }

  function isExist(arr, element) {
    let exist = false;
    for (let i = 0; i < arr.length; i++) {
      if (element == arr[i]) {
        exist = true;
      }
    }
    return exist;
  }
  let buyFunc = arr => {
    let element = arr[1];
    if (isExist(inventory, element) == false) {
      inventory.push(element);
    }
    return inventory;
  };

  let trashFunc = arr => {
    let element = arr[1];
    if (isExist(inventory, element)) {
      inventory.splice(inventory.indexOf(element), 1);
    }
    return inventory;
  };

  let repairFunc = arr => {
    let element = arr[1];
    if (isExist(inventory, element)) {
      inventory.splice(inventory.indexOf(element), 1);
      inventory.push(element);
    }
    return inventory;
  };

  let upgradeFunc = arr => {
    let element = arr[1].split("-")[0];
    let upgraded = arr[1].split("-")[1];
    if (isExist(inventory, element)) {
      let index = inventory.indexOf(element) + 1;
      element = `${element}:${upgraded}`;
      inventory.splice(index, 0, element);
    }
    return inventory;
  };

  for (let i = 0; i < actions.length; i++) {
    let currentAction = actions[i][0];
    switch (currentAction) {
      case "Buy":
        buyFunc(actions[i]);
        break;
      case "Trash":
        trashFunc(actions[i]);
        break;
      case "Repair":
        repairFunc(actions[i]);
        break;
      case "Upgrade":
        upgradeFunc(actions[i]);
        break;
    }
  }
  let output = inventory.join(" ");
  console.log(output);
}
gladiatorInventori([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel"
]);
