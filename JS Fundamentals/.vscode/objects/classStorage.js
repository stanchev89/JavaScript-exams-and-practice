class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }
  get totalCost() {
    let output = 0;
    this.storage.forEach(product => {
      output += product.quantity * product.price;
    });
    return output;
  }

  addProduct = obj => {
    this.storage.push(obj);
    this.storage.quantity = obj.quantity;
    this.capacity -= obj.quantity;

    return this.storage;
  };

  getProducts = () => {
    let output = [];
    this.storage.forEach(product => {
      output.push(JSON.stringify(product));
    });
    return output.join("\n");
  };
}
let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
