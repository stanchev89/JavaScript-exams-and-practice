function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function area() {
    return Math.abs(this.x * this.y);
}

function solve(area,vol,input) {
    const inputsArr = JSON.parse(input);
    const result = [];
    inputsArr.forEach(obj => {
        const x = Number(obj.x);
        const y = Number(obj.y);
        const z = Number(obj.z);
        obj.area = area;
        obj.vol = vol;
        const output = {area: obj.area(), volume: obj.vol()};
        result.push(output);
    });
    return result;
}

const test = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;
console.log(solve(area, vol, test));