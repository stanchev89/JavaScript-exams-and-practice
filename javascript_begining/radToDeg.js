function radToDeg ([arg1]){
    let rad = parseFloat(arg1);
    let deg = rad*180/Math.PI;
    console.log(Math.round(deg));
}
radToDeg([3.1416])