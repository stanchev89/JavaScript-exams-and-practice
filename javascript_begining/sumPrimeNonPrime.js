function solve(input) {
  let entry = input[0];
  let sumPrime = 0;
  let sumNonPrime = 0;
  let isPrime = false;
  let counterNegative = 0;
  for (let i = 1; i <= input.length; i++) {
    if (entry !== "stop") {
      if (entry == Number(entry)) {
        entry = Number(entry);
        if (entry < 0) {
          console.log("Number is negative.");
          counterNegative++;
        }
      }
      for (let check = 2; check <= Math.sqrt(entry); check++) {
        if (entry % check == 0) {
          isPrime = false;
          break;
        } else {
          isPrime = true;
        }
      }
      if (entry == 3 || entry == 2) {
        isPrime = true;
      } else if (entry == 0) {
        isPrime = false;
      }
      if (counterNegative == 0) {
        if (isPrime) {
          sumPrime += entry;
        } else if (isPrime == false) {
          sumNonPrime += entry;
        }
      }
      counterNegative = 0;
      entry = input[i];
    }
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
solve(["2"]);
