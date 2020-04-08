function solve(input) {
  let degrees = +input.shift();
  let time = input.shift().toLowerCase();
  let outfit = "";
  let shoes = "";
  let output = "";
  switch (time) {
    case "morning":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "afternoon":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (degrees >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "evening":
      if (degrees >= 10 && degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Moccasins";
      } else if (degrees >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  output = `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;
  console.log(output);
}
solve(["22", "AfTeRnoon"]);
