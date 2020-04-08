function charityCampaign([arg1,arg2,arg3,arg4,arg5]){
    let days = parseFloat(arg1);
    let cheffs = parseFloat(arg2);
    let cakes = parseFloat(arg3);
    let waffers = parseFloat(arg4);
    let pancakes = parseFloat(arg5);
    let productsPerDay = (cakes * 45) + (waffers * 5.80) + (pancakes * 3.20);
    let overallIncome = days * cheffs * productsPerDay;
    let charity = (overallIncome - (overallIncome * 0.125)).toFixed(2);
    console.log(charity);
}
charityCampaign(["20","8","14","30","16"])
