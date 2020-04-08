function furniture(input) {
  let validation = /^>>[^>].+<<[\d\.]+\![\d\.]+$/g;
  let totalPrice = 0;
  let boughtItems = [];
  console.log("Bought furniture:");

  for (const line of input) {
    if (line !== "Purchase") {
      let itemRegEx = />>(.+)<</g;
      let priceRegEx = /\b([\d\.]+)\b!/g;
      if (line.match(validation)) {
        let item = itemRegEx.exec(line)[1];
        let price = Number(priceRegEx.exec(line)[1]);
        let quantity = line.split("!");
        quantity = Number(quantity[1]);
        quantity = Math.trunc(quantity);
        totalPrice += price * quantity;
        boughtItems.push(item);
      }
    } else {
      break;
    }
  }
  for (const item of boughtItems) {
    console.log(item);
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([
  ">>Sofa<<312.23!3",
  ">>TV<<300!5",
  ">Invalid<<!5",
  "Purchase",
  ">>Sofa<<312.23!3"
]);
