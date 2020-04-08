function shoppingList(input) {
let products = input.shift().split('!')
let actions = {
    urgent,
    unnecessary,
    correct,
    rearrange
};
for (let line of input) {
    line = line.split(' ');
    let action = line.shift().toLowerCase();
    if(action !== 'go'){
    actions[action](...line)
    }else {
        break;
    }
}
function urgent(item) {
    if(!products.includes(item)){
        return products.unshift(item);
    }
}

function unnecessary(item) {
    if(products.includes(item)) {
        let index = products.indexOf(item);
        return products.splice(index,1);
    }
}

function correct(oldItem,newItem) {
    if(products.includes(oldItem)) {
        let index = products.indexOf(oldItem);
        return products[index] = newItem;
    }
}

function rearrange(item) {
    if(products.includes(item)) {
        unnecessary(item);
        return products.push(item);
    }
}
console.log(products.join(', '));
}
shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Rearrange Milk',
    'Rearrange Tomatoes',
    'Go Shopping!'
  ])