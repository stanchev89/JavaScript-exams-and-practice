function disneyLandJourney(input) {
	let savedMoney = 0;
    let [ targetMoney, months ] = input.map(Number);
    let monthlyProfit = targetMoney * 0.25;
	for (let i = 1; i <= months; i++) {
		if (i % 2 !== 0 && i !== 1) {
			savedMoney -= savedMoney * 0.16;
		}

		if (i % 4 == 0) {
			savedMoney += savedMoney * 0.25;
        }
        savedMoney += monthlyProfit;
    }
    let souvenirsBudget = (savedMoney - targetMoney).toFixed(2);
    souvenirsBudget >= 0
    ? console.log(`Bravo! You can go to Disneyland and you will have ${souvenirsBudget}lv. for souvenirs.`)
    : console.log(`Sorry. You need ${(targetMoney - savedMoney).toFixed(2)}lv. more.`);

}

disneyLandJourney([ '3265', '3' ]);
