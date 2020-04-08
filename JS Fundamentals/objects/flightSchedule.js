function flightSchedule(input) {
  class Flight {
    constructor(flightNumber, direction) {
      this.flightNumber = flightNumber;
      this.direction = direction;
    }
    status = "Ready to fly";
    return;
  }
  let flights = input[0];
  for (let i = 0; i < flights.length; i++) {
    flights[i] = flights[i].split(" ");
    flights[i] = new Flight(flights[i][0], flights[i][1]);
  }

  let flightChanges = input[1];
  for (let i = 0; i < flightChanges.length; i++) {
    let [flyNum, status] = flightChanges[i].split(" ");
    flights.forEach(fly => {
      if (fly.hasOwnProperty(flyNum)) {
        fly.status = status;
      }
    });
  }
  let toPrint = input[2];

  flights.forEach(fly => {
    if (fly.status == toPrint[0]) {
      console.log(
        `{ Destination: '${fly.direction}', Status: '${fly.status}' }`
      );
    }
  });
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania"
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled"
  ],
  ["Cancelled"]
]);
