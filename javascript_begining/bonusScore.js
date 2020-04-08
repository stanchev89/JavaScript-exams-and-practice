function solve(input) {
    let n = Number(input.shift());
    let bonus = 0;
    let extraBonus = 0;
    if (n > 1000) {
        bonus = n * 0.1;
    } else if (n > 100) {
        bonus = n * 0.2;
    } else if (n <= 100) {
        bonus = 5;
    }
    if (n % 2 === 0) {
        extraBonus = 1;
    }
    else if (n % 10 == 5) {
        extraBonus = 2;
    }
    let overall = n + bonus + extraBonus;
    let overallBonus = bonus + extraBonus;
    console.log(overallBonus);
    console.log(overall);
}
solve([
    "175"
])
