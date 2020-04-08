function bitcoinMine(input) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;
  let day = 0;
  let ammount = 0;
  let firstDay = 0;
  let boughtBitcoins = 0;
  for (let i = 0; i < input.length; i++) {
    day++;
    let currentGold = input[i];
    if (day % 3 == 0) {
      currentGold -= currentGold * 0.3;
    }
    ammount += currentGold * 67.51;
    if (ammount >= bitcoinPrice) {
      if (firstDay == 0) {
        firstDay = day;
      }
      for (let buy = ammount; buy >= bitcoinPrice; buy -= bitcoinPrice) {
        boughtBitcoins++;
        ammount -= bitcoinPrice;
      }
    }
  }
  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  if (boughtBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${ammount.toFixed(2)} lv.`);
}
bitcoinMine([3124.15, 504.212, 2511.124]);
