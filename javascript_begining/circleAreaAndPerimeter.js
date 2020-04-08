function calculateAreaPerimeter([arg1]){
    let r = parseFloat(arg1);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
calculateAreaPerimeter([10])