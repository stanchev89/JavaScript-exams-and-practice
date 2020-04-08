function solve(input) {
    let town = input.shift().toLowerCase();
    let n = +input.shift();
    let commission = 0;
    let output = 0;
    switch (town) {
        case "sofia":
            if (n >= 0 && n <= 500) {
                commission = 0.05;
            } else if (n > 500 && n <= 1000) {
                commission = 0.07;
            } else if (n > 1000 && n <= 10000) {
                commission = 0.08;
            } else if (n > 10000) {
                commission = 0.12;
            }
            break;
        case "varna":
            if (n >= 0 && n <= 500) {
                commission = 0.045;
            } else if (n > 500 && n <= 1000) {
                commission = 0.075;
            } else if (n > 1000 && n <= 10000) {
                commission = 0.10;
            } else if (n > 10000) {
                commission = 0.13;
            }
            break;
        case "plovdiv":
            if (n >= 0 && n <= 500) {
                commission = 0.055;
            } else if (n > 500 && n <= 1000) {
                commission = 0.08;
            } else if (n > 1000 && n <= 10000) {
                commission = 0.12;
            } else if (n > 10000) {
                commission = 0.145;
            }
            break;
            
    }
    output = (n * commission).toFixed(2);
    if (output != 0){
        console.log(output);
    }else console.log("error");
}
solve([
    "kaspichan",
    "499.99"
])