function solve(input){
let age = +input.shift();
let gender = input.shift();
output = "";
if (age >= 16){
    if(gender ==="m"){
        output = "Mr.";
    }else if (gender === "f"){
        output = "Ms."
    }
}else if (age<16){
    if(gender ==="m"){
        output = "Master";
    }else if (gender === "f"){
        output = "Miss"
    }
}
console.log(output);
}
solve([
"19",
"f"
])