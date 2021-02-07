function solution(num) {
    return function(add) {
        return Number(num) + Number(add);
    }
}

let add5 = solution(5);
console.log(add5(2));