function solve(input){
let n = Number(input.shift());
let inn = input.shift();
let out = input.shift();
let output = 0;
if(inn === "mm"){
    if(out === "cm"){
        output = n / 10;
    }else if(out === "m"){
        output = n / 1000;
    }
}else if(inn === "cm"){
    if(out === "m"){
        output = n / 100;
    }else if(out === "mm"){
        output = n * 10;
    }
}else if(inn === "m"){
    if(out === "mm"){
        output = n * 1000;
    }else if(out === "cm"){
        output = n * 100;
    }
}
console.log(output.toFixed(3));
}
solve([
"150",
"m",
"cm"
])