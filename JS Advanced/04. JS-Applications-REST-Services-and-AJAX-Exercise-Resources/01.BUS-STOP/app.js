function getInfo() {
	const stopID = document.getElementById("stopId");
	const divStopName = document.getElementById("stopName");
	const ulBuses = document.getElementById("buses");
	fetch(`https://judgetests.firebaseio.com/businfo/${stopID.value}.json`)
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			}
			divStopName.textContent = "Error";
			ulBuses.innerHTML = "";
		})
		.then((data) => {
			if (data) {
				divStopName.innerHTML = "";
				divStopName.innerHTML = data.name;
				ulBuses.innerHTML = "";
				stopID.value = "";
				for (const bus in data.buses) {
					const newLi = document.createElement("li");
					newLi.textContent = `Bus ${bus} arrives in ${data.buses[bus]}`;
					ulBuses.appendChild(newLi);
				}
			}
		});
}
