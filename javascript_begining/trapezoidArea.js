function trapezoidArea([arg1,arg2,arg3]){
    let b1 = parseFloat(arg1);
    let b2 = parseFloat(arg2);
    let h = parseFloat(arg3);
    let formula = (b1+b2) * h / 2;
    let output = "Trapezoid area = " + formula;
    console.log(output);
}
trapezoidArea([3,4,5]);