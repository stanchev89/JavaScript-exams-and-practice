function activationKeys(input) {
let key = [input.shift()];
let actions = {
    Contains,
    Flip,
    Slice
};
for (let line of input) {
    line = line.split('>>>');
    let action = line.shift();
    if(action !== "Generate") {
        actions[action](key,[...line])

    }else {
        console.log(`Your activation key is: ${key}`);
        break;
    } 
}

function Contains(key,substring) {
    if(key[0].includes(substring)) {
        return console.log(`${key[0]} contains ${substring}`);
    }
    return console.log("Substring not found!");
}

function Flip(key,commands) {
    let type = commands.shift();
    let [startIndex,endIndex] = commands.map(Number);
    if(type === "Upper") {
        let substr = key[0].substring(startIndex,endIndex);
        key[0] = key[0].replace(substr,substr.toUpperCase());
        return console.log(key[0]);
       
    }
    let substr = key[0].substring(startIndex,endIndex);
        key[0] = key[0].replace(substr,substr.toLowerCase());
        return console.log(key[0]);
}

function Slice (key,indexes) {
    let [startIndex,endIndex] = indexes.map(Number);
    let part = key[0].slice(startIndex,endIndex);
    key[0] = key[0].replace(part,'');
    return console.log(key[0]);
    
}

}
activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ])