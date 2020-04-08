function cruise(input) {
    let kindCruise = input.shift().toUpperCase();
    console.log(kindCruise)
    let kindCabin = input.shift();
    let nights = Number(input.shift());
    let output = "";
    let discount = 0.25;
    let priceMed = 0;
    let priceAdri = 0;
    let priceAeg = 0;
    switch (kindCruise) {
        case "Mediterranean":
            if (kindCabin === "standard cabin") {
                priceMed = 27.50 * nights * 4;
            } else if (kindCabin === "cabin with balcony") {
                priceMed = 30.20 * nights * 4;
            } else if (kindCabin === "apartment") {
                priceMed = 40.50 * nights * 4;
            }
            if (nights > 7) {
                priceMed = priceMed - (priceMed * discount);
            }
            output = `Annie's holiday in the ${kindCruise} sea costs ${priceMed.toFixed(2)} lv.`
            break;
        case "Adriatic":
            if (kindCabin === "standard cabin") {
                priceAdri = 22.90 * nights * 4;
            } else if (kindCabin === "cabin with balcony") {
                priceAdri = 25.00 * nights * 4;
            } else if (kindCabin === "apartment") {
                priceAdri = 34.99 * nights * 4;
            }
            if (nights > 7) {
                priceAdri = priceAdri - (priceAdri * discount);
            }
            output = `Annie's holiday in the ${kindCruise} sea costs ${priceAdri.toFixed(2)} lv.`
            break;
        case "Aegean":
            if (kindCabin === "standard cabin") {
                priceAeg = 23.00 * nights * 4;
            } else if (kindCabin === "cabin with balcony") {
                priceAeg = 26.60 * nights * 4;
            } else if (kindCabin === "apartment") {
                priceAeg = 39.80 * nights * 4;
            }
            if (nights > 7) {
                priceAeg = priceAeg - (priceAeg * discount);
            }
            output = `Annie's holiday in the ${kindCruise} sea costs ${priceAeg.toFixed(2)} lv.`
            break;
    }
    console.log(output);
}
cruise([
    "Mediterranean",
    "cabin with balcony",
    "7"
])