function solve(input) {
  let username = input.shift();
  let password = input.shift();
  let passGuess = input.shift();
  while (passGuess != password) {
    passGuess = input.shift();
  }
  console.log(`Welcome ${username}!`);
}
solve(["Stefan", "stanchev89", "ssvvs894ss", "12345", "stanchev89"]);
