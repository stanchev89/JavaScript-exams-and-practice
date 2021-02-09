function solve(input) {
    class ListProccessor {

        constructor(){
            this.initialWords = [];
        }

        add(str) {
            this.initialWords.push(str);
        }

        remove(str) {
            for(let i = 0; i < this.initialWords.length; i++) {
                if(this.initialWords[i] === str) {
                    this.initialWords.splice(i,1);
                    i--;
                }
            }
        }

        print() {
            console.log(this.initialWords.join(','))
        }
    }

    const stringsArray = new ListProccessor();

    input.forEach(action => {
        const [actionKey,actionValue] = action.split(' ');
        stringsArray[actionKey](actionValue);
    })
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);