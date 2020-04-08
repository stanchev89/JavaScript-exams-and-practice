function solve(input){
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let timeSecToM = Number(input.shift());
    let timeToDist = timeSecToM * distance;
    let timewaste = Math.trunc(distance / 15);
    timewaste = timewaste * 12.50;
   // console.log(timewaste)
    let totalTime = timeToDist + timewaste;
    if(totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }else console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`)
}
solve([
"10464",
"1500",
"20"
])