function triangleStars() {
  let draw = 1;
  let star = "*";
  for (let index = 1; index <= 10; index++) {
    for (let i = 1; i < 55; i++) {
      console.log(star, draw++);
    }
  }
}
triangleStars();
