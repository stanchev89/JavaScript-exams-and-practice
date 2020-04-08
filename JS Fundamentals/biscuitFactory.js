function biscuitFactory(input) {
  let producePerDay = input[0];
  let workers = input[1];
  let competingFactory = input[2];
  let produce30Days = 0;
  for (let i = 1; i < 31; i++) {
    if (i % 3 !== 0) {
      produce30Days += Math.trunc(workers * producePerDay);
    } else {
      produce30Days += Math.trunc(
        workers * (producePerDay - producePerDay * 0.25)
      );
    }
  }
  let diff = Math.abs(produce30Days - competingFactory);
  let percentage = (diff / competingFactory) * 100;
  console.log(
    `You have produced ${produce30Days} biscuits for the past month.`
  );

  produce30Days > competingFactory
    ? console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    : console.log(
        `You produce ${percentage.toFixed(2)} percent less biscuits.`
      );
}

biscuitFactory([65, 12, 26000]);
