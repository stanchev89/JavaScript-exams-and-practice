function solve(input) {
    let speed = Number(input.shift());
    otuput = "";
    if (speed > 1000) {
        output = "extremely fast";
    } else if (speed <= 1000 && speed > 150) {
        output = "ultra fast";
    } else if (speed <= 150 && speed > 50) {
        output = "fast";
    } else if (speed <= 50 && speed > 10) {
        output = "average"
    }
    else output = "slow";
    console.log(output)
}
solve([
    "160"
])