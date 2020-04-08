function storeProvision(available, ordered) {
  let products = {};
  for (let i = 0; i < available.length; i += 2) {
    let currentItem = available[i];
    let currentQuantity = Number(available[i + 1]);
    products[currentItem] = currentQuantity;
  }
  for (let i = 0; i < ordered.length; i += 2) {
    let currentItem = ordered[i];
    let currentQuantity = Number(ordered[i + 1]);
    if (products[currentItem] >= 0) {
      products[currentItem] += currentQuantity;
    } else {
      products[currentItem] = currentQuantity;
    }
  }
  for (const key in products) {
    if (products.hasOwnProperty(key)) {
      const element = products[key];
      console.log(`${key} -> ${element}`);
    }
  }
  console.log(products);
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
