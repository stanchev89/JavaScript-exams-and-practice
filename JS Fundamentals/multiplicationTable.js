function multiplication(num) {
  let n = Number(num);
  let output = 0;
  for (let i = 1; i <= 10; i++) {
    output = `${n} X ${i} = ${n * i}`;
    console.log(output);
  }
}
multiplication(2);
