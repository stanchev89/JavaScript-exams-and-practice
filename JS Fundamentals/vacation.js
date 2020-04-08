function vacation(n, typeOfGroup, dayOfWeek) {
  let guests = Number(n);
  let type = typeOfGroup;
  let day = dayOfWeek;
  let pricePerPerson = 0;
  let discount = 0;
  let totalPrice = 0;
  switch (type) {
    case "Students":
      if (day == "Friday") {
        pricePerPerson = 8.45;
      } else if (day == "Saturday") {
        pricePerPerson = 9.8;
      } else if (day === "Sunday") {
        pricePerPerson = 10.46;
      }
      totalPrice = guests * pricePerPerson;
      if (guests >= 30) {
        discount = 0.15;
        totalPrice -= totalPrice * discount;
      }
      totalPrice = totalPrice.toFixed(2);
      break;
    case "Business":
      if (day == "Friday") {
        pricePerPerson = 10.9;
      } else if (day == "Saturday") {
        pricePerPerson = 15.6;
      } else if (day === "Sunday") {
        pricePerPerson = 16;
      }
      if (guests >= 100) {
        guests -= 10;
      }
      totalPrice = guests * pricePerPerson;
      totalPrice = totalPrice.toFixed(2);
      break;
    case "Regular":
      if (day == "Friday") {
        pricePerPerson = 15;
      } else if (day == "Saturday") {
        pricePerPerson = 20;
      } else if (day === "Sunday") {
        pricePerPerson = 22.5;
      }
      totalPrice = guests * pricePerPerson;
      if (guests >= 10 && guests <= 20) {
        discount = 0.05;
        totalPrice -= totalPrice * discount;
      }
      totalPrice = totalPrice.toFixed(2);
      break;
  }
  let output = `Total price: ${totalPrice}`;
  console.log(output);
}
vacation(40, "Bussines", "Saturday");
