function softUniBar(input) {
  let totalPrice = 0;
  for (const line of input) {
    if (line !== "end of shift") {
      let validation = /\%[A-Z][a-z]+\%[^|$%.]*<[\w+\s?\-?\&?]+>[^|$%.]*\|\d+\|[^|$%.]*(\d*\.?\d*\$)$/g;
      if (line.match(validation) !== null) {
        let name = /^\%(\w+)\%/g.exec(line)[1];
        let product = /<([\w+\s?\-?\&?]+)>/g.exec(line)[1];
        let quantity = Number(/(\d+)\|/g.exec(line)[1]);
        if (quantity !== 0) {
          let price = Number(/([\d\.]+)\$$/g.exec(line)[1] * quantity);
          totalPrice += price;
          console.log(`${name}: ${product} - ${price.toFixed(2)}`);
        }
      }
    } else {
      break;
    }
  }
  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBar([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Va &- l i d>valid|0|valid20.5$",
  "end of shift"
]);
