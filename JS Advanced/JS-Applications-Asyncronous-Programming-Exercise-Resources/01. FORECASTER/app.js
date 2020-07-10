function getUrl(url, code) {
	return url.replace("{code}", code);
}

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

function attachEvents() {
	const submitBtn = document.getElementById("submit");
	const forecastEl = document.getElementById("forecast");
	const currentForecast = document.getElementById("current");
	const upcomingForecast = document.getElementById("upcoming");
	const baseUrl = "https://judgetests.firebaseio.com/locations.json";
	const currentConditionsUrl = "https://judgetests.firebaseio.com/forecast/today/{code}.json";
	const upcomingConditionsUrl = "https://judgetests.firebaseio.com/forecast/upcoming/{code}.json";
	const targetLocation = document.getElementById("location");

	submitBtn.addEventListener("click", () => {
		if (targetLocation.value !== "") {
			fetch(baseUrl).then((res) => res.json()).then((locations) => {
				let isInvalidName = true;
				locations.forEach((e) => {
					if (e.name === targetLocation.value) {
						isInvalidName = false;
						setCurrentCondition(e);
						setUpcomingCondition(e);
					}
				});
				if (isInvalidName) {
					forecastEl.style.display = "none";
					targetLocation.value = "";
					alert("Invalid Town Name");
				}
			});
		}
	});

	const symbols = {
		Sunny: `&#x2600;`,
		"Partly sunny": `&#x26C5;`,
		Overcast: `&#x2601;`,
		Rain: `&#x2614;`,
		Degrees: `&#176°`
	};
	function setCurrentCondition(location) {
		return fetch(getUrl(currentConditionsUrl, location.code)).then((res) => res.json()).then((data) => {
			currentForecast.innerHTML = "";
			targetLocation.value = "";
			const labelDiv = element("div", "Current conditions", { class: "label" });
			currentForecast.appendChild(labelDiv);

			const condition = Object.values(data)[0].condition;
			const townNameCountryName = Object.values(data)[1];
			const highT = Object.values(data)[0].high;
			const lowT = Object.values(data)[0].low;

			const spanConditionSymbol = element("span", ``, { class: "condition symbol" });
			spanConditionSymbol.innerHTML = symbols[condition];
			const divForecasts = element("div", "", { class: "forecasts" });
			const townNameSpan = element("span", townNameCountryName, { class: "forecast-data" });
			const minMaxTempSpan = element("span", `${lowT}°/${highT}°`, { class: "forecast-data" });
			const weatherInfoSpan = element("span", condition, { class: "forecast-data" });
			const conditionSpan = element("span", [ townNameSpan, minMaxTempSpan, weatherInfoSpan ], {
				class: "condition"
			});
			divForecasts.appendChild(spanConditionSymbol);
			divForecasts.appendChild(conditionSpan);
			currentForecast.appendChild(divForecasts);
			forecastEl.style.display = "block";
		});
	}

	function setUpcomingCondition(location) {
		upcomingForecast.innerHTML = "";
		const labelDiv = element("div", "Three-day forecast", { class: "label" });
		upcomingForecast.appendChild(labelDiv);
		const forecastInfoSpan = element("span", "", { class: "forecast-info" });
		return fetch(getUrl(upcomingConditionsUrl, location.code)).then((res) => res.json()).then((data) => {
			data.forecast.forEach((day) => {
				const symbolSpan = element("span", "", { class: "symbol" });
				symbolSpan.innerHTML = symbols[day.condition];
				const minMaxTempSpan = element("span", `${day.low}°/${day.high}°`, { class: "forecast-data" });
				const conditionSpan = element("span", day.condition, { class: "forecast-data" });
				const upcomingSpan = element("span", [ symbolSpan, minMaxTempSpan, conditionSpan ], {
					class: "upcoming"
				});
				forecastInfoSpan.appendChild(upcomingSpan);
			});
			upcomingForecast.appendChild(forecastInfoSpan);
		});
	}
}

attachEvents();
