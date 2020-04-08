function solve(input){
let firstNum = Number(input.shift());
let secondNum = Number(input.shift());
if(firstNum > secondNum){
    console.log(firstNum);
}else if(secondNum>=firstNum){
    console.log(secondNum);
}
}
solve([
"5"
])