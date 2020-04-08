function solve(input) {
  let nums = +input[0];
  let n = 0;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 1; i <= nums; i++) {
    n = +input[i];
    if (n < 200) {
      p1++;
    } else if (n >= 200 && n <= 399) {
      p2++;
    } else if (n >= 400 && n <= 599) {
      p3++;
    } else if (n >= 600 && n <= 799) {
      p4++;
    } else if (n >= 800) {
      p5++;
    }
  }
  if (p1 > 0) {
    p1 = ((p1 / nums) * 100).toFixed(2);
  } else {
    p1 = "0.00";
  }
  if (p2 > 0) {
    p2 = ((p2 / nums) * 100).toFixed(2);
  } else {
    p2 = "0.00";
  }
  if (p3 > 0) {
    p3 = ((p3 / nums) * 100).toFixed(2);
  } else {
    p3 = "0.00";
  }
  if (p4 > 0) {
    p4 = ((p4 / nums) * 100).toFixed(2);
  } else {
    p4 = "0.00";
  }
  if (p5 > 0) {
    p5 = ((p5 / nums) * 100).toFixed(2);
  } else {
    p5 = "0.00";
  }
  console.log(`${p1}%`);
  console.log(`${p2}%`);
  console.log(`${p3}%`);
  console.log(`${p4}%`);
  console.log(`${p5}%`);
}

solve(["3", "1", "2", "999", ""]);
