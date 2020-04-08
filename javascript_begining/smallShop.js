function solve(input) {
    let product = input.shift();
    let town = input.shift().toLowerCase();
    let n = +input.shift();
    let price = 0;
    switch (town) {
        case "sofia":
            if (product === "coffee") {
                price = n * 0.50;
            } else if (product === "water") {
                price = n * 0.80;
            } else if (product === "beer") {
                price = n * 1.20;
            } else if (product === "sweets") {
                price = n * 1.45;
            } else if (product === "peanuts") {
                price = n * 1.60;
            }
            break;
        case "plovdiv":
            if (product === "coffee") {
                price = n * 0.40;
            } else if (product === "water") {
                price = n * 0.70;
            } else if (product === "beer") {
                price = n * 1.15;
            } else if (product === "sweets") {
                price = n * 1.30;
            } else if (product === "peanuts") {
                price = n * 1.50;
            }
            break;
        case "varna":
            if (product === "coffee") {
                price = n * 0.45;
            } else if (product === "water") {
                price = n * 0.70;
            } else if (product === "beer") {
                price = n * 1.10;
            } else if (product === "sweets") {
                price = n * 1.35;
            } else if (product === "peanuts") {
                price = n * 1.55;
            }
            break;
    }
    console.log(price);
}
solve([
    "coffee",
    "varna",
    "2"
])