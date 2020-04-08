function currencyConverter([arg1,arg2,arg3]){
    let sum = parseFloat(arg1);
    let from = arg2.toLowerCase();
    let to = arg3.toLowerCase();
    let output = 0;
    if (from == "bgn"){
        if (to == "usd"){
            output = (sum / 1.79549).toFixed(2) + " " + "USD";
            }else if (to == "eur"){
            output = (sum / 1.95583).toFixed(2) + " " + "EUR";
            }else if (to == "gbp"){
            output = (sum / 2.53405).toFixed(2) + " " + "GBP";
            }else output = "error";
        }
    else if(from == "usd"){
        if (to == "bgn"){
            output = (sum * 1.79549).toFixed(2) + " " + "BGN";
            }else if (to == "eur"){
            output = ((sum * 1.79549) / 1.95583).toFixed(2) + " " + "EUR";
            }else if (to == "gbp"){
            output = ((sum * 1.79549) / 2.53405).toFixed(2) + " " + "GBP";
            }else output = "error";
        }
    
    else if(from == "gbp"){
        if (to == "bgn"){
            output = (sum * 2.53405).toFixed(2) + " " + "BGN";
            }else if (to == "eur"){
            output = ((sum * 2.53405) / 1.95583).toFixed(2) + " " + "EUR";
            }else if (to == "usd"){
            output = ((sum * 2.53405) / 1.79549).toFixed(2) + " " + "USD";
            }else output = "error";
        }
        else if(from == "eur"){
            if (to == "bgn"){
                output = (sum * 1.95583).toFixed(2) + " " + "BGN";
                }else if (to == "gbp"){
                output = ((sum * 1.95583) / 2.53405).toFixed(2) + " " + "GBP";
                }else if (to == "usd"){
                output = ((sum * 1.95583) / 1.79549).toFixed(2) + " " + "GBP";
                }else output = "error";
            }
    else output = "error";
    
    console.log(output);
}
currencyConverter([150.35,"USD","EuR"])