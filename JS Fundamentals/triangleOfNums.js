function TriangleOfNumbers(num) {
  let input = Number(num);
  let counter = 0;
  let output = "";
  for (let i = 1; i <= input; i++) {
    counter = i.toString();
    for (let index = 1; index <= i; index++) {
      output += counter + " ";
    }
    console.log(output);
    output = "";
  }
}
TriangleOfNumbers(5);
