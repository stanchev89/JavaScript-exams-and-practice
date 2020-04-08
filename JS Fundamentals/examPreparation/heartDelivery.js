function heartDelivery(input) {
    let houses = input.shift().split('@').map(x => {
        return x = Number(x);
    })
    let jumpLength = 0;
   
    for (let line of input) {
        line = line.split(' ');
        let jumpCount = Number(line[1])
        if(line[0] !== 'Love!') {
            jump(jumpCount)
        }else {
            console.log(`Cupid's last position was ${jumpLength}.`);
            houses.filter(house => house > 0).length > 0
            ? console.log(`Cupid has failed ${notEachZero()} places.`)
            : console.log(`Mission was successful.`);
            break;
        }
    }
    function jump(num) {
        jumpLength + num >= houses.length ? jumpLength = 0 : jumpLength+=num;
        if(houses[jumpLength] == 0){
            return console.log(`Place ${jumpLength} already had Valentine's day.`);
        }else {
            houses[jumpLength] -= 2;
            if(houses[jumpLength] == 0){
                return console.log(`Place ${jumpLength} has Valentine's day.`);
                
            }
        }
    }
}
heartDelivery([
    '0@0@0',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ])



