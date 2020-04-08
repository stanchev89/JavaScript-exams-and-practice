function triangleArea([arg1,arg2]){
    let a = parseFloat(arg1);
    let h = parseFloat(arg2);
    let area = a * h / 2;
    console.log(area.toFixed(2));
}
triangleArea([7.75,8.45])