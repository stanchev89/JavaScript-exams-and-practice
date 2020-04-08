function movingTarget(input) {
    let targets = input.shift()
                       .split(' ')
                       .map(Number);
    for (let line of input) {
        line = line.split(' ');
        let action = line.shift().toLowerCase();        
        if(action !== "end"){
            if(action == "shoot"){
                shoot(targets,line)
            }else if(action == "add") {
                add(targets,line)
            }else if(action == "strike") {
                strike(targets,line)
            }
        }else {
            console.log(targets.join('|'));
            
        }
        
    }    
    
    function shoot(targets,params) {
        let[index,power] = params.map(Number);
        if(targets[index] !== undefined) {
            targets[index] -= power;
            if(targets[index] <= 0) {
                return targets.splice(index,1);
            }
        }
    }


    function add(targets,params) {
        let[index,value] = params.map(Number);
        if(targets[index] !== undefined) {
            return targets.splice(index,0,value);
        }
        return console.log("Invalid placement!");
        
    }


    function strike(targets,params) {
        let[index,radius] = params.map(Number);
        if(radius > 0){
        let from = index - radius;
        let to = index + radius;
        if(targets[from] !== undefined && targets[to] !== undefined) {
            
            for(let i = from; i <= to; i++) {
                targets.splice(from,1);
            }
        }else {
            return console.log("Strike missed!");
            
        }   
    }else {
        if(targets[index] !== undefined) {
            return targets.splice(index,1)
        }else {
            return console.log("Strike missed!");

        }
    }
    
    }

}
movingTarget(  [
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 6',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
  ])





//   [
//     '47 55 85 78 99 20',
//     'Shoot 1 55',
//     'Shoot 8 15',
//     'Strike 2 3',
//     'Add 0 22',
//     'Add 2 40',
//     'Add 2 50',
//     'End'
//   ]





//   [
//     '52 74 23 44 96 110',
//     'Shoot 5 10',
//     'Shoot 1 80',
//     'Strike 2 1',
//     'Add 22 3',
//     'End'
//   ]





// function movingTarget(input) {
//     let targets = input.shift()
//                        .split(' ')
//                        .map(Number);
//     let actions = {
//         Shoot,
//         Add,
//         Strike
//     }
//     for (let line of input) {
//         line = line.split(' ');
//         let action = line.shift();        
//         if(action !== "End"){
//             actions[action](targets,line)            
//         }else {
//             console.log(targets.join('|'));
            
//         }
        
//     }    
    
//     function Shoot(targets,params) {
//         let[index,power] = params.map(Number);
//         if(targets[index] !== undefined) {
//             targets[index] -= power;
//             if(targets[index] <= 0) {
//                 return targets.splice(index,1);
//             }
//         }
//     }


//     function Add(targets,params) {
//         let[index,value] = params.map(Number);
//         if(targets[index] !== undefined) {
//             return targets.splice(index,0,value);
//         }
//         return console.log("Invalid placement!");
        
//     }


//     function Strike(targets,params) {
//         let[index,radius] = params.map(Number);
//         if(radius > 0){
//         let from = index - radius;
//         let to = index + radius;
//         if(targets[from] !== undefined && targets[to] !== undefined) {
            
//             for(let i = from; i <= to; i++) {
//                 targets.splice(from,1);
//             }
//         }else {
//             return console.log("Strike missed!");
            
//         }   
//     }else {
//         if(targets[index] !== undefined) {
//             return targets.splice(index,1)
//         }else {
//             return console.log("Strike missed!");

//         }
//     }
    
//     }

// }