function solve(path) {
  let file = path.split(`\\`).pop();
  let [fileName, extension] = file.split(".");
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
solve("C:\\Internal\\training-internal\\Template.pptx");
