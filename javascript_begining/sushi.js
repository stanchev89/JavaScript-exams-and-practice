function solve(input) {
  let kind = input[0];
  let restaurant = input[1];
  let pieces = +input[2];
  let delivery = input[3];
  let price = 0;
  let output = "";
  let invalid = 0;
  switch (restaurant) {
    case "Sushi Zone":
      if (kind === "sashimi") {
        price = pieces * 4.99;
      } else if (kind === "maki") {
        price = pieces * 5.29;
      } else if (kind === "uramaki") {
        price = pieces * 5.99;
      } else if (kind === "temaki") {
        price = pieces * 4.29;
      }
      break;
    case "Sushi Time":
      if (kind === "sashimi") {
        price = pieces * 6.49;
      } else if (kind === "maki") {
        price = pieces * 4.69;
      } else if (kind === "uramaki") {
        price = pieces * 4.49;
      } else if (kind === "temaki") {
        price = pieces * 5.19;
      }
      break;
    case "Sushi Bar":
      if (kind === "sashimi") {
        price = pieces * 5.25;
      } else if (kind === "maki") {
        price = pieces * 5.55;
      } else if (kind === "uramaki") {
        price = pieces * 6.25;
      } else if (kind === "temaki") {
        price = pieces * 4.75;
      }
      break;
    case "Asian Pub":
      if (kind === "sashimi") {
        price = pieces * 4.5;
      } else if (kind === "maki") {
        price = pieces * 4.8;
      } else if (kind === "uramaki") {
        price = pieces * 5.5;
      } else if (kind === "temaki") {
        price = pieces * 5.5;
      }
      break;
    default:
      invalid++;
      break;
  }
  if (delivery === "Y") {
    delivery = price * 0.2;
    price += delivery;
  }
  price = Math.ceil(price);
  if (invalid > 0) {
    output = `${restaurant} is invalid restaurant!`;
  } else {
    output = `Total price: ${price} lv.`;
  }
  console.log(output);
}
solve(["sashimi", "Sushi Time", "3", "N"]);
