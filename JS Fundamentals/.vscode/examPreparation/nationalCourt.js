function nationalCourt(input) {
    let peoplePerHour = Number(input.shift()) + Number(input.shift()) + Number(input.shift());
    let peoples = Number(input.shift());
    let neededHours = calculateHours(peoplePerHour,peoples)
    console.log(`Time needed: ${neededHours}h.`);
    
    function calculateHours(pph,peoples) {
        let result = 0;
        for(let i = 1; peoples > 0 ; i++) {
            peoples -= pph;
            result++
            if(i % 3 == 0 && (peoples > 0)){
                result ++
            }
        }
        return result;

    }
    
}
nationalCourt([ '3', '2', '5', '40' ])