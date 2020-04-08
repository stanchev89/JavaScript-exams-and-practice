function heroesOfCodesAndLogic(input) {
    let allData = input.slice();    
    let numOfHeroes = Number(allData.shift());
    let heroes = {};
    let actions = {
        castspell,
        takedamage,
        recharge,
        heal
    };
    for(let i = 0; i < numOfHeroes; i ++) {
        let currentData = allData.shift().split(' ');
        let[name,hp,mp] = currentData;
        heroes[name] = {
            hp : Number(hp),
            mp : Number(mp)
        }
    }
    
    for (const line of allData) {
        let commands = line.split(' - ');
        let action = commands.shift().toLowerCase();
        if(action !== "end") {
            actions[action](...commands)
        }else {
            break;
        }
    }


    function castspell(name,mp,spellName) {
        let mpNeeded = Number(mp);
        if(heroes[name]['mp'] >= mpNeeded) {    // >=   or >
            heroes[name]['mp'] -= mpNeeded;
            let actualMp = heroes[name]['mp'];
            return console.log(`${name} has successfully cast ${spellName} and now has ${actualMp} MP!`);
            
        }else {
            return console.log(`${name} does not have enough MP to cast ${spellName}!`);
            
        }
    }


    function takedamage(name,damage,attacker) {
        heroes[name]['hp'] -= Number(damage);
        let actualHp = heroes[name]['hp'];
        if(heroes[name]['hp'] > 0) {
            return console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${actualHp} HP left!`);
            
        }else {
            delete heroes[name];
            return console.log(`${name} has been killed by ${attacker}!`);
        }
    }


    function recharge(name,ammount) {
        ammount = Number(ammount)
       let currentMp = heroes[name]['mp'];
        if(heroes[name]['mp'] + ammount > 200) {
            let diff = 200 - currentMp;
            heroes[name]['mp'] = 200;
            return console.log(`${name} recharged for ${diff} MP!`); 
        }
        heroes[name]['mp'] += ammount;
        return console.log(`${name} recharged for ${ammount} MP!`);
    }


    function heal(name,ammount) {
        ammount = Number(ammount);
        let currentHp = heroes[name]['hp'];
        if(heroes[name]['hp'] + ammount > 100) {
            let diff = 100 - currentHp;
            heroes[name]['hp'] = 100;
            return console.log(`${name} healed for ${diff} HP!`); 
        }
        heroes[name]['hp'] += ammount;
        return console.log(`${name} healed for ${ammount} HP!`);
    }

    Object.keys(heroes).sort((a,b) => {
        return heroes[b]['hp'] - heroes[a]['hp']
        || a.localeCompare(b)

    }).forEach(heroe => {
        console.log(heroe);
        console.log(`  HP: ${heroes[heroe]['hp']}`);
        console.log(`  MP: ${heroes[heroe]['mp']}`);  
    }
    )
}
heroesOfCodesAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ])