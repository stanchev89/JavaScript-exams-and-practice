function gladiatorExpenses(
  losts,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armourPrice
) {
  let brokenHelmets = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let brokenArmour = 0;
  let aureus = 0;
  for (let times = 1; times <= losts; times++) {
    if (times % 2 == 0) {
      brokenHelmets++;
    }
    if (times % 3 == 0) {
      brokenSword++;
    }
    if (times % 6 == 0) {
      brokenShield++;
    }
  }
  for (let shieldCounter = 1; shieldCounter <= brokenShield; shieldCounter++) {
    if (shieldCounter % 2 == 0) {
      brokenArmour++;
    }
  }
  brokenArmour *= armourPrice;
  brokenHelmets *= helmetPrice;
  brokenShield *= shieldPrice;
  brokenSword *= swordPrice;
  aureus = brokenHelmets + brokenShield + brokenSword + brokenArmour;
  console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`);
}
gladiatorExpenses(2, 2, 3, 4, 5);
