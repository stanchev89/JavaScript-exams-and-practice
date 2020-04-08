function password(input) {
let validation = /^(.+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/g
let countLines = Number(input[0]);
for(let i = 1; i <= countLines; i++) {
    let currentLine = input[i];
    if(currentLine.match(validation) !== null) {
        let password = validation.exec(currentLine);        
        console.log(`Password: ${password.splice(2,)
                            .join('')}`);       
    }else {
        console.log("Try another password!");  
    } 
}
}
password([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'  ])