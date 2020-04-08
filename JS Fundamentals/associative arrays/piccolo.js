function piccolo(input) {
  let parkingCars = new Set();

  input.forEach(log => {
    log = log.split(", ");
    if (log[0] == "IN") {
      parkingCars.add(log[1]);
    } else if (log[0] == "OUT") {
      parkingCars.delete(log[1]);
    }
  });
  let sortedCars = Array.from(parkingCars).sort();
  if (sortedCars.length != 0) {
    sortedCars.forEach(car => {
      console.log(car);
    });
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
