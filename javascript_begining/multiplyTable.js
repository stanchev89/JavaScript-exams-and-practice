function solve(input) {
  let num = input[0];
  let firstNum = +num[2];
  let secondNum = +num[1];
  let thirdNum = +num[0];
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  for (let i = 1; i <= firstNum; i++) {
    counter1++;
    counter2 = 0;
    for (let i2 = 1; i2 <= secondNum; i2++) {
      counter2++;
      counter3 = 0;
      for (let i3 = 1; i3 <= thirdNum; i3++) {
        counter3++;

        console.log(
          `${counter1} * ${counter2} * ${counter3} = ${counter1 *
            counter2 *
            counter3};`
        );
      }
    }
  }
}
solve(["222"]);
