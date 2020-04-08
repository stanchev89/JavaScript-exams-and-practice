function primeNumChecker(n) {
  let num = n;
  let isPrime = false;
  for (let checker = 2; checker < Math.sqrt(num); checker++) {
    if (num % checker == 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  if (num == 1 || num == 2) {
    isPrime = true;
  } else if (num == 0) {
    isPrime = false;
  }
  console.log(isPrime);
}
primeNumChecker(81);
