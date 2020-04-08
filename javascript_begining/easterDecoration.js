function solve(input) {
  let clients = +input[0];
  let items = 0;
  let price = 0;
  let bills = 0;
  for (let i = 1; i <= input.length; i++) {
    let item = input[i];
    if (item !== "Finish") {
      items++;
      switch (item) {
        case "basket":
          price += 1.5;
          break;
        case "wreath":
          price += 3.8;
          break;
        case "chocolate bunny":
          price += 7;
          break;
      }
    } else {
      if (items % 2 == 0) {
        price -= price * 0.2;
      }
      bills += price;
      console.log(`You purchased ${items} items for ${price.toFixed(2)} leva.`);
      items = 0;
      price = 0;
    }
  }
  console.log(
    `Average bill per client is: ${(bills / clients).toFixed(2)} leva.`
  );
}
solve([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish"
]);
