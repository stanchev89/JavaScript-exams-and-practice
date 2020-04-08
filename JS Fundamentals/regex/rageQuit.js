function rageQuit([input]) {
let pattern = /(\D+)(\d+)/g;
let parts = '';
let counter = 0;
let output = ''
while(parts != null) {
    parts = pattern.exec(input);
    if(parts !== null){
        output += repeater(parts);
    }
    
    
}


function repeater(patt) {
    let base = patt[1];
    let num = Number(patt[2]);
    let result = '';
    for(let i = 0; i < num; i++) {
        result += base.toUpperCase();
    }
    return result;

}

function uniqueSymbols(str) {
    let unique = []
    for (const char of str) {
        if(!unique.includes(char)){
            unique.push(char)
        }
    }
    return unique.length
}
console.log(`Unique symbols used: ${uniqueSymbols(output)}`);
console.log(output);



}
rageQuit([ 'a3' ])