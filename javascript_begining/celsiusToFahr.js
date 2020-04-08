function calculate([arg1]){
    let celsius = parseFloat(arg1);
    let fahr = celsius * 9/5+32
    console.log (fahr.toFixed(2));
}
calculate([0])