function solve(input){
let vacationPrice = Number(input.shift());
let nPuzzles = Number(input.shift());
let nSpeakDoll = Number(input.shift());
let nTeddyBear = Number(input.shift());
let nMinions = Number(input.shift());
let nTrucks = Number(input.shift());
let discount = 0;
let allToys = 0;
let overall = 0;
let loan = 0.1;
let output = "";
let leftMoney = 0;
let puzzlez = nPuzzles * 2.60;
let speakDoll = nSpeakDoll * 3.00;
let teddyBear = nTeddyBear * 4.10;
let minion = nMinions * 8.20;
let truck = nTrucks * 2.00;
allToys = puzzlez + speakDoll + teddyBear + minion + truck;
if((nPuzzles+nSpeakDoll+nTeddyBear+nMinions+nTrucks)>=50){
    discount = (allToys * 0.25);
    overall = allToys - discount - ((allToys-discount) * loan);
}else overall = allToys - (allToys * loan);
leftMoney = Math.abs((overall - vacationPrice));
leftMoney = leftMoney.toFixed(2);
if (overall >= vacationPrice){
    output =`Yes! ${leftMoney} lv left.`
}else output =`Not enough money! ${leftMoney} lv needed.`;
//console.log(nPuzzles+nSpeakDoll+nTeddyBear+nMinions+nTrucks)
//console.log(allToys)
//console.log(discount)
console.log(output);
//console.log(overall)
}
solve([
"40.8",
"20",
"25",
"30",
"50",
"10"
])