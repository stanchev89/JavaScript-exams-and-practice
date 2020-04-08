function solve(input) {
  let month = input.shift().toLowerCase();
  let n = +input.shift();
  let output1 = "";
  let output2 = "";
  let discountStudio = 0;
  let discountApart = 0;
  let priceStudio = 0;
  let priceApart = 0;
  switch (month) {
    case "may":
    case "october":
      priceStudio = n * 50;
      priceApart = n * 65;
      if (n > 7 && n < 14) {
        discountStudio = priceStudio * 0.05;
      } else if (n > 14) {
        discountStudio = priceStudio * 0.3;
        discountApart = priceApart * 0.1;
      }
      break;
    case "june":
    case "september":
      priceStudio = n * 75.2;
      priceApart = n * 68.7;
      if (n > 14) {
        discountStudio = priceStudio * 0.2;
        discountApart = priceApart * 0.1;
      }
      break;
    case "july":
    case "august":
      priceStudio = n * 76;
      priceApart = n * 77;
      if (n > 14) {
        discountApart = priceApart * 0.1;
      }
      break;
  }
  priceApart = priceApart - discountApart;
  priceStudio = priceStudio - discountStudio;
  output1 = `Apartment: ${priceApart.toFixed(2)} lv.`;
  output2 = `Studio: ${priceStudio.toFixed(2)} lv.`;
  console.log(output1);
  console.log(output2);
}
solve(["may", "15"]);
