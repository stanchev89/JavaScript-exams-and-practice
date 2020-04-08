function seats(input) {
    let nTickets = parseInt(input.shift());
    let output = "";
    let output2 = "";
    let firstChar = "";
    let secondChar = 0;
    let thirdChar = 0;
    let fourthChar = 0;
    let fifthChar = 0;
    let sixtChar = 0;
    let ticketCode = "";
    for (let index = 1; index <= nTickets; index++) {
        ticketCode = input.shift();
        firstChar = ticketCode[0];
        //let up = /[A-Z]/.test(firstChar);
        //console.log(up)
        if (/[A-Z]/.test(firstChar)) {
            secondChar = ticketCode.charAt(1);
            thirdChar = ticketCode.charAt(2);
            fourthChar = ticketCode.charAt(3);
            fifthChar = ticketCode.charAt(4);
            sixthChar = ticketCode.charAt(5);
            if (fifthChar == 0) {
                output = `Seat decoded: ${firstChar}${secondChar}${thirdChar}`
            } else {
                secondChar = secondChar.charCodeAt(0);
                output = `Seat decoded: ${firstChar}${secondChar}`
            }
        }
         else {
            secondChar = ticketCode.charAt(1);
            thirdChar = ticketCode.charAt(2);
            fourthChar = ticketCode.charAt(3);
            fifthChar = ticketCode.charAt(4);
            sixthChar = ticketCode.charAt(5);
            if (fifthChar == 0) {
                output = `Seat decoded: ${fourthChar}${secondChar}${thirdChar}`
            } else {
                secondChar = secondChar.charCodeAt(0);
                output = `Seat decoded: ${firstChar}${secondChar}`
            }
        }
        console.log(output)


    }

    // console.log(secondChar)
}
seats(["3",
    "042W",
    "W981",
    "W24578"
])