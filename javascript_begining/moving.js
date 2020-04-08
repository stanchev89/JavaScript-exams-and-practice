function solve(input) {
  let widthArea = +input.shift();
  let lengthArea = +input.shift();
  let heightArea = +input.shift();
  let m3Area = widthArea * lengthArea * heightArea;
  let output = "";
  let sumBoxes = 0;
  let diff = 0;
  let boxes = "";
  let boxes2 = "";
  while (input.length > 0) {
    let boxes = input.shift();
    if (boxes != "Done") {
      boxes = parseInt(boxes);
      sumBoxes += boxes;
      diff = Math.abs(m3Area - sumBoxes);
    }
    if (sumBoxes > m3Area && input.length == 0) {
      output = `No more free space! You need ${diff} Cubic meters more.`;
      break;
    }
    if (boxes == "Done") {
      output = `${diff} Cubic meters left.`;
      break;
    }
  }
  while (input.length > 0) {
    if (boxes != "Done") {
      let boxes2 = input.shift();
      sumBoxes += boxes2;
      diff = Math.abs(m3Area - sumBoxes);
    }
    output = `No more free space! You need ${diff} Cubic meters more.`;
  }

  console.log(output);
}
solve(["10", "10", "2", "20", "20", "20", "20", "122"]);
