class Bank {
	constructor(bankName) {
		this._bankName = bankName;
		this.allCustomers = [];
	}
	newCustomer(customer) {
		const curCustomer = this.allCustomers.filter((c) => c.firstName === customer.firstName)[0];
		if (curCustomer === undefined) {
			customer.transactions = [];
			customer.totalMoney = 0;
			this.allCustomers.push(customer);
			return customer;
		}
		throw new Error(`${curCustomer.firstName} ${curCustomer.lastName} is already our customer!`);
	}

	depositMoney(personalId, amount) {
		if (amount > 0) {
			return this.makeBankOperation(personalId, amount, "made deposit of");
		}
	}

	withdrawMoney(personalId, amount) {
		if (amount > 0) {
			return this.makeBankOperation(personalId, amount, "withdrew");
		}
	}

	customerInfo(personalId) {
		const curCustomer = this.allCustomers.filter((c) => c.personalId === personalId)[0];
		if (curCustomer === undefined) {
			throw new Error("We have no customer with this ID!");
		}

		let output = `Bank name: ${this._bankName}\n`;
		output += `Customer name: ${curCustomer.firstName} ${curCustomer.lastName}\n`;
		output += `Customer ID: ${curCustomer.personalId}\n`;
		output += `Total Money: ${curCustomer.totalMoney}$\n`;
		if (curCustomer.transactions.length > 0) {
			output += `Transactions:\n`;

			curCustomer.transactions.sort((a, b) => b.number - a.number);
			let allTransactions = [];
			curCustomer.transactions.forEach((transaction) => {
				let currentLine = `${transaction.number}. ${curCustomer.firstName} ${curCustomer.lastName} ${transaction.transactionType} ${transaction.amount}$!`;
				allTransactions.push(currentLine);
			});
			output += allTransactions.join("\n");
		}

		return output;
	}

	makeBankOperation(personalId, amount, typeOperation) {
		const curCustomer = this.allCustomers.filter((c) => c.personalId === personalId)[0];
		if (curCustomer === undefined) {
			throw new Error("We have no customer with this ID!");
		}
		const numTransaction = curCustomer.transactions.length + 1;
		if (typeOperation === "made deposit of") {
			curCustomer.totalMoney += amount;
		} else {
			if (curCustomer.totalMoney - amount < 0) {
				throw new Error(
					`${curCustomer.firstName} ${curCustomer.lastName} does not have enough money to withdraw that amount!`
				);
			}
			curCustomer.totalMoney -= amount;
		}

		curCustomer.transactions.push({
			number: numTransaction,
			transactionType: typeOperation,
			amount
		});
		return `${curCustomer.totalMoney}$`;
	}
}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
