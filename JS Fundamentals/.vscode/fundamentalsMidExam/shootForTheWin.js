function shootForTheWin(input) {
let targets = input.shift()
                   .split(' ')
                   .map(Number);
let counter = [];
for (let index of input) {
    if(index !== 'End') {
        index = Number(index);
        shoot(targets,index,counter)
        
    }else {
        console.log(`Shot targets: ${counter.length} -> ${targets.join(' ')}`);
        break;
    }
}


function shoot(targets,index,counter) {
    if(targets[index] == undefined || targets[index] < 0) {
        return false
    }
    counter.push('shot')
    let target = targets[index];
    for(let i = 0; i < targets.length; i++) {
        if((i !== index) && (targets[i] >= 0)) {
            if(targets[i] > target) {
                targets[i] -= target;
            }else {
                targets[i] += target;
            }

        }
    }
    return targets[index] = -1;
}

}
shootForTheWin([ '24 50 36 70', '0', '4', '3', '1', 'End' ])