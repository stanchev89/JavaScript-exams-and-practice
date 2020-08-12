class Movie {
	constructor(movieName, ticketPrice) {
		this.movieName = movieName;
		this.ticketPrice = Number(ticketPrice);
		this.screenings = [];
		this.allTickets = 0;
		this.totalProfit = 0;
	}
	checkDateAndHall(date, hall) {
		const result = this.screenings.filter((el) => el.date === date && el.hall === hall)[0];
		return result;
	}

	newScreening(date, hall, description) {
		if (this.checkDateAndHall(date, hall)) {
			throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
		}
		const screening = {
			date,
			hall,
			description
		};
		this.screenings.push(screening);
		return `New screening of ${this.movieName} is added.`;
	}

	endScreening(date, hall, soldTickets) {
		const currScreening = this.checkDateAndHall(date, hall);
		if (currScreening === undefined) {
			throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
		}
		const currentProfit = Number(soldTickets) * this.ticketPrice;
		this.allTickets += Number(soldTickets);
		this.totalProfit += currentProfit;
		this.screenings.forEach((el, index) => {
			if (el.date === currScreening.date && el.hall === currScreening.hall) {
				this.screenings.splice(index, 1);
			}
		});
		return `${this
			.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
	}

	toString() {
		const output = [];
		output.push(`${this.movieName} full information:`);
		output.push(`Total profit: ${this.totalProfit.toFixed(0)}$`);
		output.push(`Sold Tickets: ${this.allTickets}`);
		if (this.screenings.length > 0) {
			output.push("Remaining film screenings:");
			this.screenings.sort((a, b) => a.hall.localeCompare(b.hall)).forEach((scr) => {
				output.push(`${scr.hall} - ${scr.date} - ${scr.description}`);
			});
		} else {
			output.push("No more screenings!");
		}
		return output.join("\n");
	}
}

let m = new Movie("Wonder Woman 1984", "10.00");
m.newScreening("October 2, 2020", "IMAX 3D", `3D`);
m.newScreening("October 3, 2020", "Main", `regular`);
m.newScreening("October 4, 2020", "IMAX 3D", `3D`);
m.endScreening("October 2, 2020", "IMAX 3D", 150);
m.endScreening("October 3, 2020", "Main", 78);
console.log(m.toString());

// "Wonder Woman 1984 full information:\nTotal profit: 2280$\nSold Tickets: 228\nRemaining film screenings:\nIMAX 3D - October 2, 2020 - 3D"

// "Wonder Woman 1984 full information:\nTotal profit: 2280$\nSold Tickets: 228\nRemaining film screenings:\nIMAX 3D - October 4, 2020 - 3D");
