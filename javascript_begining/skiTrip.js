function solve(input) {
    let n = +input.shift();
    n = n - 1;
    let kind = input.shift();
    let rating = input.shift();
    let discount = 0;
    let output = 0;
    let price = 0;
    switch (kind) {
        case "room for one person":
            price = n * 18.00;
            discount = 0;
            break;
        case "apartment":
            price = n * 25.00;
            if (n < 10) {
                discount = 0.30;
            } else if (n >= 10 && n <= 15) {
                discount = 0.35;
            } else if (n > 15) {
                discount = 0.50;
            }
            break;
        case "president apartment":
            price = n * 35.00;
            if (n < 10) {
                discount = 0.1;
            } else if (n >= 10 && n <= 15) {
                discount = 0.15;
            } else if (n > 15) {
                discount = 0.20;
            }
            break;
    }
    price = price - (price * discount);
    if (rating === "positive") {
        output = price + (price * 0.25);
    } else if (rating === "negative") {
        output = price - (price * 0.1);
    }
    console.log (output.toFixed(2));
}
solve([
    "30",
    "president apartment",
    "negative"
])