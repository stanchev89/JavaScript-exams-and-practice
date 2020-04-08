function counterStrike(input) {
let energy = Number(input.shift());
let wins = 0;
let counter = 0;
for (let line of input) {
    if(line !== 'End of battle') {
        let distance = Number(line);
        let oldEnergy = energy;
        energy -= distance;
        counter++
        if(energy < 0) {
            
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${oldEnergy} energy`);
            break;
            
        }else {
            wins++
            if(wins % 3 == 0) {
                energy += wins;
            }
        }

    }else {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
        break;
    }
}

}
counterStrike([
    '100', '10', '10',
    '10',  '1',  '2',
    '3',   '73', '10'
  ])


//   [ '200', '54', '14', '28', '13', 'End of battle' ]

// [
//     '100', '10', '10',
//     '10',  '1',  '2',
//     '3',   '73', '10'
//   ]