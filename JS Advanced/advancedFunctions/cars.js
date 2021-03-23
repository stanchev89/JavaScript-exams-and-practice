function solve(input) {
    const allCars = [];

    function createNewCar(name) {
        const newCar = { name };
        newCar.print = function () {
            const output = [];
            for (const key in this) {
                if (key !== 'name' && key !== 'print') {
                    output.push(`${key}:${this[key]}`)
                }
            }
            return console.log(output.join(', '));;
        }
        return newCar;
    }

    function inheritCar(name, parentCar) {
        const newCar = Object.create(parentCar);
        newCar.name = name;
        return newCar;
    }

    function findCar(name) {
        return allCars.find(car => car.name === name);
    }

    return (() => {
        const actions = {
            create: (name, _, parentName) => {
                const parentCar = parentName ? findCar(parentName) : null;
                const newCar = parentName
                    ? inheritCar(name, parentCar)
                    : createNewCar(name);
                allCars.push(newCar);
            },
            set: (car, prop, value) => {
                const currentCar = findCar(car);
                currentCar[prop] = value;
            },
            print: (name) => {
                const currentCar = findCar(name);
                currentCar.print();
            }
        }

        input.forEach(line => {
            const [action, name, prop, value] = line.split(' ');
            actions[action](name, prop, value);
        });
    })();

}



solve(['create c1',
    'create c2 inherit c1',
    'create c3 inherit c2',
    'set c1 color red',
    'set c2 model new',
    'set c3 model old',
    'print c1',
    'print c2',
    'print c3']);