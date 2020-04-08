function solve(input) {
    let name = input.shift();
    let output = "";
    if (name === "banana" || name === "apple" || name === "kiwi" || name === "cherry"
        || name === "lemon" || name === "grapes") {
        output = "fruit";
    } else if (name === "tomato" || name === "cucumber" || name === "pepper" ||
        name === "carrot") {
        output = "vegetable";
    }else output = "unknown";
    console.log(output);
}
solve([
    ""
])