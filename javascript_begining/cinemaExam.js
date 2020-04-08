function solve(input) {
  let capacity = +input[0];
  let sumArrive = 0;
  let priceTicket = 5;
  let income = 0;
  for (let i = 1; i <= input.length; i++) {
    let arrivals = input[i];
    if (arrivals == Number(arrivals)) {
      arrivals = Number(arrivals);
      sumArrive += arrivals;
      if (sumArrive > capacity) {
        console.log("The cinema is full.");
        break;
      }
      income += arrivals * 5;
      if (arrivals % 3 === 0) {
        income -= 5;
      }
    }
    if (arrivals === "Movie time!") {
      console.log(
        `There are ${capacity - sumArrive} seats left in the cinema.`
      );
      break;
    }
  }
  console.log(`Cinema income - ${income} lv.`);
}
solve(["50", "15", "10", "10", "15", "5", "Movie time!"]);
