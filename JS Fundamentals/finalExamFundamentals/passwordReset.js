function passwordReset(input) {
    let password = input.shift();
    let actions = {
        takeodd,
        cut,
        substitute
    }
    for (const line of input) {
        let commands = line.split(' ');
        let action = commands.shift().toLowerCase();
        
        if(action !== 'done'){
           actions[action](...commands)
        }else {
            console.log(`Your password is: ${password}`);
            break;
        }
        
    }

    
    function takeodd() {
        let newPass = '';
        for(let i = 0; i < password.length; i++) {
            if(i % 2 !== 0){
            newPass += password[i];
            }
        }
        password = newPass;
        return  console.log(password);
    }

    function cut(index,length) {
        index = Number(index);
        length = Number(length);
        let cutting = password.split('')
                              .splice(index,length)
                              .join('');
        password = password.replace(cutting,'');
        return console.log(password);
        

    }

    function substitute(substr,substitute) {
            if(password.includes(substr)) {
                while(password.includes(substr)) {
                    password = password.replace(substr,substitute);
                }
                return console.log(password);
                
            }else {
                return console.log("Nothing to replace!");
                
            }
    }
}
passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ])