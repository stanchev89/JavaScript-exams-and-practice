function alcoholMarket([arg1, arg2, arg3, arg4, arg5]) {
    let whiskeyPrice = parseFloat(arg1);
    let beerL = parseFloat(arg2);
    let wineL = parseFloat(arg3);
    let rakiaL = parseFloat(arg4);
    let whiskeyL = parseFloat(arg5);
    let rakiaPrice = whiskeyPrice - (whiskeyPrice * 0.5);
    let winePrice = rakiaPrice - (rakiaPrice * 0.4);
    let beerPrice = rakiaPrice - (rakiaPrice * 0.8);
    let totalPrice = ((whiskeyL * whiskeyPrice) + (beerL * beerPrice) + (wineL * winePrice) + (rakiaL * rakiaPrice)).toFixed(2);
    console.log(rakiaPrice)
    console.log(winePrice)
    console.log(beerPrice)
    console.log(whiskeyL * whiskeyPrice)

    console.log(totalPrice)
}
alcoholMarket(["50", "10", "3.5", "6.5", "1"])