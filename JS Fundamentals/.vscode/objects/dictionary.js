function dictionary(input) {
  let keys = [];
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let repeat = false;
    let currentObj = {};
    let inputJSON = JSON.parse(input[i]);
    let key = Object.keys(inputJSON).toString();
    let value = Object.values(inputJSON).toString();
    currentObj.key = key;
    currentObj.value = value;
    for (let index = 0; index < keys.length; index++) {
      if (currentObj.key == keys[index]) {
        repeat = true;
        break;
      }
    }
    if (repeat) {
      for (let index = 0; index < output.length; index++) {
        if (output[index].key == key) {
          output[index].value = value;
        }
      }
    } else {
      keys.push(key);
      output.push(currentObj);
    }
  }
  keys.sort();
  while (output.length > 0) {
    let currentWord = keys.shift();
    for (let i = 0; i < output.length; i++) {
      if (currentWord == output[i].key) {
        console.log(`Term: ${output[i].key} => Definition: ${output[i].value}`);
        output.splice(i, 1);
      }
    }
  }
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
