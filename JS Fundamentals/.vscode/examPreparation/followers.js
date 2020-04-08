function followers(input) {
let followers = {};
let actions = {
    like,
    comment,
    blocked
};
for (let line of input) {
 line = line.split(': ')
            .join(' ')
            .split(' ');
            
if(line[0] == 'New') {
    let follower = line[2]
    if(!followers.hasOwnProperty(follower)) {
        followers[follower] = {
            likes : 0,
            comments : 0
        }
    }
}else if (line[0] == 'Log'){
    break;
}else {
    let action = line.shift().toLowerCase();    
    actions[action](...line);
}

}

function like(username,count) {
    count = Number(count);
    if(followers.hasOwnProperty(username)) {
        followers[username]['likes'] += count;
    }else {
        followers[username] = {
            likes : count,
            comments : 0
        }
    }
    return followers;
}

function comment(username) {
    if(followers.hasOwnProperty(username)) {
        followers[username]['comments'] += 1;
    }else {
        followers[username] = {
            likes : 0,
            comments : 1
        }
    }
    return followers;
}

function blocked (username) {
    if(followers.hasOwnProperty(username)){
    delete followers[username];
    }else{
        console.log(`${username} doesn't exist.`);
    }
    return followers;
}
// function sorting (f1,f2) {
//     return followers[f2]['likes'] - followers[f1]['likes'] || f1.localeCompare(f2);
// }
// console.log(`${Object.keys(followers).length} followers`);
// Object.keys(followers).sort(sorting).forEach(follower => {
    
//     let sum = followers[follower]['likes'] + followers[follower]['comments'];
    
//     console.log(`${follower}: ${sum}`);
  
// })


let entries = Object.entries(followers).sort((a,b) => {
   return b[1]['likes'] - a[1]['likes'] || a[0].localeCompare[b[0]]
})
console.log(`${entries.length} followers`);
for (const follower of entries) {
    let sum = follower[1]['likes'] + follower[1]['comments']
    console.log(`${follower[0]}: ${sum}`);
    
}

}
followers([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
  ])