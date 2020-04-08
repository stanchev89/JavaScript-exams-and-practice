function petShop([arg1, arg2]) {
    let dogs = parseFloat(arg1);
    let rest = parseFloat(arg2);
    let dogsFood = dogs * 2.50;
    let restFood = rest * 4.00;
    console.log((dogsFood + restFood).toFixed(2) + " lv.");
}
petShop(["5", "4"])