function converter([a]){
    let inches = parseFloat(a);
    let centimeters = inches * 2.54;
    console.log(`Centimeters = ${centimeters}`)
}
converter([89])