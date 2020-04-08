function solve(input) {
  let stageTournament = input[0];
  let kindTicket = input[1];
  let nTickets = +input[2];
  let picture = input[3];
  let priceTickets = 0;
  let discount = 0;
  let picturePrice = 40;
  switch (kindTicket) {
    case "Standard":
      if (stageTournament == "Quarter final") {
        priceTickets = nTickets * 55.5;
      } else if (stageTournament == "Semi final") {
        priceTickets = nTickets * 75.88;
      } else if (stageTournament == "Final") {
        priceTickets = nTickets * 110.1;
      }
      break;
    case "Premium":
      if (stageTournament == "Quarter final") {
        priceTickets = nTickets * 105.2;
      } else if (stageTournament == "Semi final") {
        priceTickets = nTickets * 125.22;
      } else if (stageTournament == "Final") {
        priceTickets = nTickets * 160.66;
      }
      break;
    case "VIP":
      if (stageTournament == "Quarter final") {
        priceTickets = nTickets * 118.9;
      } else if (stageTournament == "Semi final") {
        priceTickets = nTickets * 300.4;
      } else if (stageTournament == "Final") {
        priceTickets = nTickets * 400;
      }
      break;
  }
  if (priceTickets > 4000) {
    discount = 0.25;
    picturePrice = 0;
    priceTickets = priceTickets - priceTickets * discount;
  } else if (priceTickets > 2500) {
    discount = 0.1;
    priceTickets = priceTickets - priceTickets * discount;
  }
  if (picture == "Y") {
    priceTickets += nTickets * picturePrice;
  }
  console.log(priceTickets.toFixed(2));
}
solve(["Semi final", "VIP", "9", "Y", ""]);
