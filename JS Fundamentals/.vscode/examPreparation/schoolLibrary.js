function schoolLibrary(input) {
    let actions = {
        add,
        take,
        swap,
        insert,
        check
    };
    let initials = input.shift()
                     .split('&')
                     
    let books = initials.reduce(function (a,b){
        if(a.indexOf(b) < 0) a.push(b);
        return a;
    },[]);
    
    for (let line of input) {
        line = line.split('|');
        let action = line.shift()
                         .split(" ")[0]
                         .toLowerCase()
                         .trim();
        if(action !== 'done' && action !== ''){  
            line = line.map(x => x.trim())
            actions[action](books,...line)
        }else {
            console.log(books.join(', '));
            break;
        }
        
        
    }    

    function add (books,currentBook) {
        if(!books.includes(currentBook)) {
            return books.unshift(currentBook);
        }
    }

    function take (books,currentBook) {
        if(books.includes(currentBook)) {
            let index = books.indexOf(currentBook);
            return books.splice(index,1);
        }
    }

    function swap (books,...allData) {
        let[book1,book2] = allData;
        if(books.includes(book1) && books.includes(book2)) {
            let buffer = book2;
            let index1 = books.indexOf(book1);
            let index2 = books.indexOf(book2);
            return books[index2] = book1,books[index1] = buffer;
            
        }
    }

    function insert(books,currentBook) {
        return books.push(currentBook);
    }

    function check(books,index) {
        if(books[index] !== undefined) {
            return console.log(books[index]);
        }
    }

}
schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Check Book | 4',
    'Insert Book | The Stories of Anton Chekhov',
    'Done ',
    ''
  ])