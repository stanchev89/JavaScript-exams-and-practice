function solve(input) {
  let budget = +input.shift();
  //console.log(input);
  let season = input.shift().toLowerCase();
  let destination = "";
  let kind = "";
  let price = 0;
  let output1 = "";
  let output2 = "";
  switch (season) {
    case "summer":
      if (budget <= 100) {
        price = budget * 0.3;
        destination = "Bulgaria";
      } else if (budget <= 1000) {
        price = budget * 0.4;
        destination = "Balkans";
      }
      kind = "Camp";
      break;
    case "winter":
      if (budget <= 100) {
        price = budget * 0.7;
        destination = "Bulgaria";
      } else if (budget <= 1000) {
        price = budget * 0.8;
        destination = "Balkans";
      }
      kind = "Hotel";
      break;
  }
  if (budget > 1000) {
    destination = "Europe";
    kind = "Hotel";
    price = budget * 0.9;
  }
  output1 = `Somewhere in ${destination}`;
  output2 = `${kind} - ${price.toFixed(2)}`;
  console.log(output1);
  console.log(output2);
}

solve(["1500", "summer"]);
