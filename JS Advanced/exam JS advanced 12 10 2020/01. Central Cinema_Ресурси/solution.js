function solve() {
	const inputContainer = document.querySelector("#container");
	const moviesSection = document.querySelector("#movies");
	const archiveSection = document.querySelector("#archive");
	const btnClear = archiveSection.querySelector("button");
	let [ name, hall, ticketPrice, btnOnScreen ] = Array.from(inputContainer.children);
	btnOnScreen.addEventListener("click", onScreenHandler);
	btnClear.addEventListener("click", clear);
	function onScreenHandler(e) {
		e.preventDefault();

		if (name.value !== "" && hall.value !== "" && ticketPrice.value !== "" && !isNaN(ticketPrice.value)) {
			ticketPrice.value = Number(ticketPrice.value).toFixed(2);
			currentMovie = createElement("li", [
				createElement("span", `${name.value}`),
				createElement("strong", `Hall: ${hall.value}`),
				createElement("div", [
					createElement("strong", `${ticketPrice.value}`),
					createElement("input", "", { placeholder: "Tickets Sold" }),
					createElement("button", "Archive")
				])
			]);
			[ name, hall, ticketPrice, btnOnScreen ].forEach((el) => (el.value = ""));
			const moviesUlEl = moviesSection.querySelector("ul");
			moviesUlEl.appendChild(currentMovie);
			const btnArchive = currentMovie.querySelector("button");
			btnArchive.addEventListener("click", archiveMovie);

			function archiveMovie(e) {
				const currentDiv = e.target.parentNode;
				const movie = currentDiv.parentNode;
				const strongEl = movie.querySelector("strong");
				const ticketPrice = currentDiv.querySelector("strong");
				const input = currentDiv.querySelector("input");
				if (input.value !== "" && !isNaN(input.value)) {
					const currentAmount = Number(ticketPrice.innerText) * Number(input.value);
					strongEl.innerText = `Total amount: ${currentAmount.toFixed(2)}`;
					currentDiv.remove();
					const btnDelete = createElement("button", "Delete");
					movie.appendChild(btnDelete);
					const archiveUlEl = archiveSection.querySelector("ul");
					btnDelete.addEventListener("click", deleteMovie);
					archiveUlEl.appendChild(movie);
				}
			}

			function deleteMovie(e) {
				e.target.parentNode.remove();
			}
		}
	}

	function clear(e) {
		const ulEl = e.target.parentNode.querySelector("ul");
		const allLiEls = Array.from(ulEl.querySelectorAll("li"));
		allLiEls.forEach((el) => {
			el.remove();
		});
	}

	function createElement(type, content, attributes) {
		const result = document.createElement(type);

		if (attributes !== undefined) {
			Object.assign(result, attributes);
		}

		if (Array.isArray(content)) {
			content.forEach(append);
		} else {
			append(content);
		}

		function append(node) {
			if (typeof node === "string") {
				node = document.createTextNode(node);
			}

			result.appendChild(node);
		}

		return result;
	}
}
