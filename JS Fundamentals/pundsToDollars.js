function poundsToDollars(ammount) {
  let pound = 1.31;
  let dollars = ammount;
  let output = (dollars * pound).toFixed(3);
  console.log(output);
}
poundsToDollars(80);
