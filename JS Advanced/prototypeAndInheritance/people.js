function solve() {
	class Employee {
		constructor(name, age, salary = 0, tasks = []) {
			if (new.target === Employee) {
				throw new Error("Cannot instantiate directly!");
			}
			this.name = name;
			this.age = age;
			this.salary = salary;
			this.tasks = tasks;
		}

		work() {
			const taskToPrint = this.tasks.shift();
			console.log(taskToPrint);
			this.tasks.push(taskToPrint);
		}
		collectSalary() {
			return console.log(`${this.name} received ${this.salary} this month.`);
		}

		getSalary() {
			return this.salary;
		}
	}

	class Junior extends Employee {
		constructor(name, age) {
			super(name, age);
			this.salary = 0;
			this.tasks = [];
			this.tasks.push(`${this.name} is working on a simple task.`);
		}
	}

	class Senior extends Employee {
		constructor(name, age, salary = 0, tasks = []) {
			super(name, age);
			this.salary = 0;
			this.tasks = [];
			this.tasks.push(`${this.name} is working on a complicated task.`);
			this.tasks.push(`${this.name} is taking time off work.`);
			this.tasks.push(`${this.name} is supervising junior workers.`);
		}
	}

	class Manager extends Employee {
		constructor(name, age) {
			super(name, age);
			this.salary = 0;
			this.dividend = 0;
			this.tasks = [];
			this.tasks.push(`${this.name} scheduled a meeting.`);
			this.tasks.push(`${this.name} is preparing a quarterly report.`);
		}
		getSalary() {
			return this.salary + this.dividend;
		}

		collectSalary() {
			return console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
		}
	}

	return { Employee, Junior, Senior, Manager };
}
const create = solve();
let junior = new create.Junior("Valentin", 3);
let senior = new create.Senior("Simona", 26);
let manager = new create.Manager("Stefan", 31);
manager.salary = 3000;
manager.collectSalary();
manager.dividend = 550;
manager.collectSalary();
