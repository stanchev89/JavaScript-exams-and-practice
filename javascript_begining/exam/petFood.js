function solve(input) {
  let days = +input.shift();
  let totalFood = +input.shift();
  let sumDog = 0;
  let sumCat = 0;
  let totalEats = 0;
  let cookies = 0;
  for (let i = 1; i <= days; i++) {
    let currentEats = 0;
    let dogEats = +input.shift();
    let catEats = +input.shift();
    sumDog += dogEats;
    sumCat += catEats;
    currentEats = dogEats + catEats;
    totalEats += currentEats;
    if (i % 3 == 0) {
      cookies += currentEats * 0.1;
    }
  }
  let percentTotalEats = ((totalEats / totalFood) * 100).toFixed(2);
  let percentDog = ((sumDog / totalEats) * 100).toFixed(2);
  let percentCat = ((sumCat / totalEats) * 100).toFixed(2);
  console.log(`Total eaten biscuits: ${cookies.toFixed()}gr.`);
  console.log(`${percentTotalEats}% of the food has been eaten.`);
  console.log(`${percentDog}% eaten from the dog.`);
  console.log(`${percentCat}% eaten from the cat.`);
}
solve(["3", "500", "100", "30", "110", "25", "120", "35"]);
