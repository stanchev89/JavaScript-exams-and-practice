function solve(ticketsData, sortCriteria) {
	class Ticket {
		constructor(destination, price, status) {
			this.destination = destination;
			this.price = Number(price);
			this.status = status;
		}
	}

	const tickets = [];

	for (const ticket of ticketsData) {
		const curTicket = new Ticket(...ticket.split('|'));
		tickets.push(curTicket);
	}

	let result = tickets.sort((a, b) => {
		if (sortCriteria === 'price') {
			return a[sortCriteria] - b[sortCriteria];
		}
		return a[sortCriteria].localeCompare(b[sortCriteria]);
	});

	return result;
}
// solve(
// 	[
// 		'Philadelphia|94.20|available',
// 		'New York City|95.99|available',
// 		'New York City|95.99|sold',
// 		'Boston|126.20|departed'
// 	],
// 	'destination'
// );

solve(
	[
		'Philadelphia|94.20|available',
		'New York City|95.99|available',
		'New York City|95.99|sold',
		'Boston|126.20|departed'
	],
	'price'
);
