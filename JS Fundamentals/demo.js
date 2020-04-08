let nums = [2, 5, 77, 12, 444, -1, 0, -4];
let counter = 0;
let min = nums.reduce((acc, cur) => (acc < cur ? acc : cur), 0);
console.log(min);
