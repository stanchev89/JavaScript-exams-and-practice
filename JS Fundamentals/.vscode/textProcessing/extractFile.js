function extractFile(path) {
  let index = path.lastIndexOf(`\\`) + 1;
  let file = path.slice(index);
  let fileName = "";
  let extension = "";

  let separator = file.lastIndexOf(".");
  fileName = file.substring(0, separator);
  extension = file.substring(separator + 1, file.length);

  fileName = fileName.trim();
  extension = extension.trim();
  console.log(`File name: ${fileName}`);

  console.log(`File extension: ${extension}`);
}
extractFile("\\Internal\\training-internal\\Stefan.jpg");
