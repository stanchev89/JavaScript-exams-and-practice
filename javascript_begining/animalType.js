function solve(input) {
    let animal = input.shift().toLowerCase();
    let output = "";
    if (animal === "dog") {
        output = "mammal";
    } else if (animal === "crocodile" || animal === "tortoise" || animal === "snake") {
        output = "reptile";
    } else output = "unknown";
    console.log(output);
}
solve([
    "dog"
])