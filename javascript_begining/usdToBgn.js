function usdToBgn([arg1]){
    let usd = parseFloat(arg1);
    let bgl = usd * 1.79549;
    console.log(bgl.toFixed(2));
}
usdToBgn([20])
