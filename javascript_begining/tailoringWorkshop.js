function tailoringWorkshop([arg1,arg2,arg3]){
    let tables = parseFloat(arg1);
    let lengthTables = parseFloat(arg2);
    let widthTables = parseFloat(arg3);
    let coverArea = tables *( (lengthTables + 0.6) * (widthTables + 0.6));
    let quadArea = tables * ((lengthTables / 2) * (lengthTables / 2));
    let coverInUsd = coverArea * 7;
    let coverInBgl = coverInUsd * 1.85;
    let quadInUsd = quadArea * 9;
    let quadInBgl = quadInUsd * 1.85;
    let outputUsd = (coverInUsd+quadInUsd).toFixed(2) + " USD";
    let outputBgl = (coverInBgl + quadInBgl).toFixed(2) + " BGN";
    console.log(outputUsd);
    console.log(outputBgl);
}
tailoringWorkshop(["5","1.00","0.50"])