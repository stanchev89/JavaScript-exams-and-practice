function chessBoard(num) {
  let black = '    <span class="black"></span>';
  let white = '    <span class="white"></span>';
  console.log(`<div class="chessboard">`);
  for (let i = 1; i <= num; i++) {
    let counter = 0;
    if (i % 2 !== 0) {
      counter = 0;
    } else {
      counter = 1;
    }
    console.log("<div>");
    for (let k = 1; k <= num; k++) {
      counter++;
      if (counter % 2 !== 0) {
        console.log(black);
      } else {
        console.log(white);
      }
    }
    console.log("  </div>");
  }

  console.log("</div>");
}
chessBoard(5);
