function solve1(string) {
        let counter = 1;
        const arr = string.split('');
    return arr.reduce((acc,curr,index) => {
        if(curr !== arr[index+1]) {
            acc.push(`${curr}-${counter}`);
            counter = 1;
            return acc;
        }
        counter ++
        return acc;
    },[])
}

function solve2(string) {
    let arr = string.split('');
    const output = [];
    while(arr.length > 0) {
        const indexFirstDiffChar = arr.findIndex(char => char !== arr[0]);
        if(indexFirstDiffChar >= 0) {
            output.push(arr[0] + '-' + indexFirstDiffChar);
            arr = arr.slice(indexFirstDiffChar);
        }else {
            output.push(arr[0] + '-' + arr.length);
            arr = [];
        }
    }
    return output
}
console.time('first');
console.log(solve1('aaaabbbcccca'));
console.timeEnd('first');

console.time('second');
console.log(solve2('aaaabbbcccca'));
console.timeEnd('second');

