function solve(input){
let budget = Number(input.shift());
let nStatist = Number(input.shift());
let priceCloth = Number(input.shift());
let decorPrice = budget * 0.1;
let totalCloth = nStatist * priceCloth;

if(nStatist > 150){
    totalCloth = totalCloth - (totalCloth * 0.1)
}
let expense = decorPrice + totalCloth;
let diff = Math.abs(budget - expense);
if(budget < expense){
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
}else if (budget >= expense){
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
}
}
solve([
"15437.62",
"186",
"57.99"
])