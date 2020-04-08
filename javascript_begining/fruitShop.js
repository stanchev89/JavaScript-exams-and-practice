function solve(input) {
    let fruit = input.shift().toLowerCase();
    let day = input.shift().toLowerCase();
    let n = +input.shift();
    let output = 0;
    let output2 = "error";
    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            if (fruit === "banana") {
                output = n * 2.50;
            } else if (fruit === "apple") {
                output = n * 1.20
            } else if (fruit === "orange") {
                output = n * 0.85
            } else if (fruit === "grapefruit") {
                output = n * 1.45
            } else if (fruit === "kiwi") {
                output = n * 2.70
            } else if (fruit === "pineapple") {
                output = n * 5.50
            } else if (fruit === "grapes") {
                output = n * 3.85
            }
            break;
        case "saturday":
        case "sunday":
            if (fruit === "banana") {
                output = n * 2.70;
            } else if (fruit === "apple") {
                output = n * 1.25
            } else if (fruit === "orange") {
                output = n * 0.90
            } else if (fruit === "grapefruit") {
                output = n * 1.60
            } else if (fruit === "kiwi") {
                output = n * 3.00
            } else if (fruit === "pineapple") {
                output = n * 5.60
            } else if (fruit === "grapes") {
                output = n * 4.20
            }
            break;
       
    }
    if (output != 0) {
        console.log(output.toFixed(2));
    }else console.log(output2)
}
solve([
    "beer",
    "Friday",
    "3"
])