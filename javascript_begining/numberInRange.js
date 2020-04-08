function solve(input){
let n = +input.shift();
let output = "";
if (n>=-100 && n <= 100 && n != 0){
    output = "Yes"
}else output = "No"
console.log(output);
}
solve([
"0"
])