function yard(arg1){
    let area = parseFloat(arg1);
    let overall = area * 7.61;
    let discount =overall * 0.18;
    overall = overall - discount;
    console.log(`The final price is: ${overall.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);

}
yard("540")