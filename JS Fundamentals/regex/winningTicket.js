function winnigTicket([input]) {
    let charsPattern = /[\$\#\^\@]{6,}/g
    let tickets = [];
    input = input.split(', ').forEach(element => {
        tickets.push(element.trim())
    });

    for (const curTicket of tickets) {
            curTicket.length == 20
            ? console.log(whatWin(curTicket))
            : console.log('invalid ticket');
    
    }


    function whatWin(ticket) {
        let firstHalf = ticket.slice(0,10);
        let secondHalf = ticket.slice(10)
        let firstSymbols =firstHalf.match(charsPattern);
        let secondSymbols =secondHalf.match(charsPattern);
        if(firstSymbols !== null && secondSymbols !== null) {
            firstSymbols = equalChars(firstSymbols[0]);
            secondSymbols = equalChars(secondSymbols[0]);
            if(firstSymbols == secondSymbols && firstSymbols !== false) {
                let char = firstSymbols[0];
                if(firstSymbols.length == 10) {
                    return `ticket "${ticket}" - 10${char} Jackpot!`
                }else {
                    return `ticket "${ticket}" - ${firstSymbols.length}${char}`
                }
                
            }else if((firstSymbols) && (secondSymbols)){
                if(firstSymbols[0] == secondSymbols[0]) {
                    let char = firstSymbols[0]
                    let result = Math.min(firstSymbols.length,secondSymbols.length)
                    return `ticket "${ticket}" - ${result}${char}`
                }

            }else {
                return `ticket "${ticket}" - no match`
            }
            
        }else {
            return `ticket "${ticket}" - no match`
        }


    }
    
    function equalChars(str) {
        let result = [];
        let firstChar = str[0]
        for(let i = 0; i < str.length; i++) {
            let curChar = str[i];
            if (curChar === firstChar) {
                result.push(curChar)
            }else {
                if(result.length > 5){
                    return result.join('');
                }else{
                    result = [curChar]
                    firstChar = str[i]
                }
            }
        }
        if(result.length > 5){
            return result.join('');
        }else{
            return false;
        }
    }

}
winnigTicket(["@@@@@#####$$$$$^^^^^, $$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey, Cash$$$$$$Ca$$$$$$sh, validticketnomatch:("])