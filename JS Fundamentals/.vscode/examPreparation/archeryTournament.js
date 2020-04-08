function archeryTournament(input) {
let archeryField = input.shift().split('|').map(Number);
let points = [];
for (let line of input) {
    line = line.split(' ');
    let action = line.shift();
    if(action == "Shoot") {
        shoot(archeryField,points,...line);
    }else if(action == "Reverse") {
        archeryField = archeryField.reverse();
    }else {
        let totalPoints = points.reduce((a,b) => a+b,0)
        console.log(archeryField.join(' - '));
        console.log(`Iskren finished the archery tournament with ${totalPoints} points!`);
        break;
    }
}

function shoot(archeryField,points,params){
    params = params.split('@');
    let[direction,from,length] = params;
    from = Number(from);
    length = Number(length)
    if(archeryField[from] == undefined) {
        return
    }
    if(direction === "Right") {
        let index = from + length;
        if(index >= archeryField.length) {
            index = from;
            for(let i = 0; i < length; i++) {
                if(index + 1 >= archeryField.length) {
                    index = 0;
                }else {
                    index ++
                }
            }
        }
        attack(archeryField,points,index);
   }else if(direction === "Left") {
        let index = from - length;
        if(index < 0) {
            index = from;
            for(let i = 0; i < length; i++) {
                if(index - 1 < 0) {
                    index = archeryField.length-1
                }else {
                    index--;
                }
            }
        }
        attack(archeryField,points,index);
    }


}

function attack (archeryField,points,index) {
    if(archeryField[index] < 5) {
        points.push(archeryField[index]);
        archeryField[index] = 0
    }else {
        points.push(5)
        archeryField[index] -= 5;
    }
    return points,archeryField;
}

}
archeryTournament([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ])