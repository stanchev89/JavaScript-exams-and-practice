class Company {
	constructor() {
		this.departments = [];
	}

	addEmployee(userName, salary, position, department) {
		const isValid = [ ...arguments ].map((item) => item === undefined || item === "" || item === null);
		if (isValid.includes(true)) {
			throw "Invalid input!";
		}
		salary = Number(salary);
		if (salary < 0) {
			throw "Invalid input!";
		}

		const currentEmployee = {
			userName,
			salary,
			position,
			department
		};
		this.departments.push(currentEmployee);
		return `New employee is hired. Name: ${userName}. Position: ${position}`;
	}

	bestDepartment() {
		let output = "";
		const uniqueDepartments = new Set();
		this.departments.forEach((emoloyee) => {
			uniqueDepartments.add(emoloyee.department);
		});
		const bestDepart = [];
		Array.from(uniqueDepartments).forEach((depart) => {
			const curDepart = [];
			for (const employee of this.departments) {
				if (employee.department === depart) {
					curDepart.push(employee.salary);
				}
			}
			const currentAvgSalary = curDepart.reduce((acc, cur) => acc + cur) / curDepart.length;
			if (bestDepart.length === 0) {
				bestDepart.push(depart);
				bestDepart.push(currentAvgSalary);
			} else {
				if (bestDepart[1] <= currentAvgSalary) {
					bestDepart[0] = depart;
					bestDepart[1] = currentAvgSalary;
				}
			}
		});
		output += `Best Department is: ${bestDepart[0]}
Average salary: ${bestDepart[1].toFixed(2)}\n`;

		const result = [];
		for (const employee of this.departments) {
			if (employee.department === bestDepart[0]) {
				result.push(employee);
			}
		}

		result.sort(sorting);

		function sorting(a, b) {
			const criteria1 = b.salary - a.salary;
			const criteria2 = a.userName.localeCompare(b.username);
			return criteria1 || criteria2;
		}
		const sortedEmployes = [];
		for (let i = 0; i < result.length; i++) {
			const currentEmployee = result[i];
			sortedEmployes.push(`${currentEmployee.userName} ${currentEmployee.salary} ${currentEmployee.position}`);
		}
		output += sortedEmployes.join("\n");
		return output;
	}
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

("Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR\n");
("Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR");
