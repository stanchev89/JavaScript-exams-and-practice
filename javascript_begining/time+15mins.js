function solve(input) {
    let h = Number(input.shift());
    let m = Number(input.shift());
    let plus15 = m + 15;
    if (plus15 >= 60) {
        h++
        plus15 = plus15 - 60;
    }
    if (h > 23) {
        h -= 24;
    }
    if (plus15 < 10) {
        plus15 = "0" + plus15;
    }
    console.log(`${h}:${plus15}`);

}
solve([
    "23",
    "59"
])