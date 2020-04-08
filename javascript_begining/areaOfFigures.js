function solve(input){
let kind = input.shift();
let a = Number(input.shift());
let b = Number(input.shift());
let output = "";
if (kind === "square"){
    output = a * a;
}else if (kind === "rectangle"){
    output = a * b;
}else if (kind === "circle"){
    output = Math.PI * a * a;
}else if (kind === "triangle"){
    output = (a * b) / 2;
}
console.log(output.toFixed(3));
}
solve([
"rectangle",
"7",
"2.5"
])