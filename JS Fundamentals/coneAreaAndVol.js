function cone(radius, height) {
  let r = radius;
  let h = height;
  let s = Math.sqrt(r * r + h * h);
  let area = Math.PI * r * s + Math.PI * (r * r);
  let volume = (1 / 3) * Math.PI * (r * r) * h;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
