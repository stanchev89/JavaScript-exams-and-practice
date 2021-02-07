function solution(str = "") {
    class Root {
        constructor(str) {
            this.str = str;
        }

        append(newPart) {
            this.str = this.str + newPart.toString();
        }

        removeStart(n) {
            this.str = this.str.slice(Number(n));
        }

        removeEnd(n) {
            const length = this.str.length - Number(n);
            this.str = this.str.slice(0,length);
        }

        print() {
            console.log(this.str);
        }
    }

    return function() {
        return new Root(str);
    }();
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();