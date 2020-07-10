function element(type, content, attributes) {
	const result = document.createElement(type);

	if (attributes !== undefined) {
		let keys = Object.keys(attributes);
		keys.forEach((att) => {
			result.setAttribute(att, attributes[att]);
		});
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

function createHr() {
	return document.createElement("hr");
}

function attachEvents() {
	const catchesDiv = document.getElementById("catches");
	catchesDiv.innerHTML = "";
	const btns = {
		load: onLoad,
		update: onUpdateOrDelete,
		delete: onUpdateOrDelete,
		add: onAdd
	};
	window.addEventListener("click", (e) => {
		e.preventDefault();

		if (btns.hasOwnProperty(e.target.className)) {
			btns[e.target.className](e);
		}
	});

	function onUpdateOrDelete(e) {
		const parent = e.target.parentNode;
		const key = parent.attributes["data-id"].value;
		const url = `https://fisher-game.firebaseio.com/catches/${key}.json`;

		if (e.target.className === "delete") {
			fetch(url, {
				method: "DELETE"
			}).then(() => onLoad());
		} else if (e.target.className === "update") {
			const [ angler, weight, species, location, bait, captureTime ] = parent.getElementsByTagName("input");

			const updatedCatch = {
				angler: angler.value,
				weight: weight.value,
				species: species.value,
				location: location.value,
				bait: bait.value,
				captureTime: captureTime.value
			};
			const noEmptyInputs =
				angler.value !== "" &&
				weight.value !== "" &&
				species.value !== "" &&
				location.value !== "" &&
				bait.value !== "" &&
				captureTime.value !== "";

			if (noEmptyInputs) {
				fetch(url, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updatedCatch)
				})
					.catch((err) => console.error(err))
					.then(() => onLoad());
			}
		}
	}
	function onAdd() {
		catchesDiv.innerHTML = "";
		const url = "https://fisher-game.firebaseio.com/catches.json";
		const [ angler, weight, species, location, bait, captureTime ] = document.querySelectorAll("#addForm > input");
		const newCatch = {
			angler: angler.value,
			weight: weight.value,
			species: species.value,
			location: location.value,
			bait: bait.value,
			captureTime: captureTime.value
		};
		const noEmptyInputs =
			angler.value !== "" &&
			weight.value !== "" &&
			species.value !== "" &&
			location.value !== "" &&
			bait.value !== "" &&
			captureTime.value !== "";
		if (noEmptyInputs) {
			return fetch(url, {
				method: "POST",
				body: JSON.stringify(newCatch)
			})
				.then((res) => res.json())
				.then(() => {
					onLoad();
					[ angler, weight, species, location, bait, captureTime ].forEach((el) => (el.value = ""));
				})
				.catch((err) => console.error(err));
		}
	}

	function onLoad() {
		catchesDiv.innerHTML = "";
		const url = "https://fisher-game.firebaseio.com/catches.json";

		return fetch(url)
			.then((res) => res.json())
			.then((catches) => {
				if (catches) {
					Object.entries(catches).forEach((c) => {
						const [ key, data ] = c;
						const anglerLabel = element("label", "Angler");
						const anglerInput = element("input", "", { type: "text", class: "angler", value: data.angler });
						const weightLabel = element("label", "Weight");
						const weightInput = element("input", "", { type: "text", class: "weight", value: data.weight });
						const speciesLabel = element("label", "Species");
						const speciesInput = element("input", "", {
							type: "text",
							class: "species",
							value: data.species
						});
						const locationLabel = element("label", "Location");
						const locationInput = element("input", "", {
							type: "text",
							class: "location",
							value: data.location
						});
						const baitLabel = element("label", "Bait");
						const baitInput = element("input", "", { type: "text", class: "bait", value: data.bait });
						const captureTimeLabel = element("label", "Capture Time");
						const captureTimeInput = element("input", "", {
							type: "text",
							class: "captureTime",
							value: data.captureTime
						});
						const updateBtn = element("button", "Update", { class: "update" });
						const deleteBtn = element("button", "Delete", { class: "delete" });
						const hr = document.createElement("hr");
						const allElements = [
							anglerLabel,
							anglerInput,
							createHr(),
							weightLabel,
							weightInput,
							createHr(),
							speciesLabel,
							speciesInput,
							createHr(),
							locationLabel,
							locationInput,
							createHr(),
							baitLabel,
							baitInput,
							createHr(),
							captureTimeLabel,
							captureTimeInput,
							createHr(),
							updateBtn,
							deleteBtn
						];
						const newDiv = element("div", allElements, { class: "catch", "data-id": key });
						catchesDiv.appendChild(newDiv);
					});
				}
			})
			.catch((err) => console.error(err));
	}
}

attachEvents();
