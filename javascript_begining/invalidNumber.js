function solve(input){
let n = +input.shift();
let output = "";
if (!((n >= 100 && n <= 200) || n == 0)){
    output = "invalid";
}
console.log(output);
}
solve([
"1"
])