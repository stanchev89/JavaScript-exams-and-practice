function solve(input) {
  let nameBook = input.shift();
  let capacity = +input.shift();
  let counter = 0;
  let output = "";
  let output1 = "";
  while (counter <= capacity) {
    let books = input.shift();
    counter++;
    if (books == nameBook) {
      output = `You checked ${counter - 1} books and found it.`;
      break;
    } else if (counter == capacity && books != nameBook) {
      output = `The book you search is not here!`;
      output1 = `You checked ${capacity} books.`;
    }
  }
  console.log(output);
  if (output != "") {
    console.log(output1);
  }
}
solve(["Troy", "4", "Stronger", "lifestyle", "Trsoy", "Troy"]);
