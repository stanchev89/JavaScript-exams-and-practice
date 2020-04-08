function solve(input) {
  let foodMoney = +input[0];
  let souvenirMoney = +input[1];
  let hotelMoney = +input[2];
  let fuel = (420 / 100) * 7;
  fuel = fuel * 1.85;
  let dayly = 3 * foodMoney + 3 * souvenirMoney;
  let totalHotel = hotelMoney * 0.9 + hotelMoney * 0.85 + hotelMoney * 0.8;
  let totalSum = fuel + dayly + totalHotel;
  console.log(`Money needed: ${totalSum.toFixed(2)}`);
}
solve(["100", "50", "500", "", ""]);
