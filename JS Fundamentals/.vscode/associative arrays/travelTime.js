function travelTime(input) {
  let flights = {};
  input.forEach(line => {
    let [countryName, townName, price] = line.split(" > ");
    price = Number(price);
    if (!flights.hasOwnProperty(countryName)) {
      flights[countryName] = {
        [townName]: price
      };
    } else {
      if (!flights[countryName][townName]) {
        flights[countryName][townName] = price;
      } else {
        if (flights[countryName][townName] > price) {
          flights[countryName][townName] = price;
        }
      }
    }
  });
  let destinations = Array.from(Object.keys(flights)).sort();
  destinations.forEach(country => {
    let output = `${country} -> `;
    for (const town in flights[country]) {
      output += `${town} -> ${flights[country][town]} `;
    }
    console.log(output);
  });
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"
]);
