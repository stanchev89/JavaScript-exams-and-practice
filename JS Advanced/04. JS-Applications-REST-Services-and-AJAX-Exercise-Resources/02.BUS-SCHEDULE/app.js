function solve() {
	const displayInfo = document.querySelector(".info");
	const departBtn = document.getElementById("depart");
	const arriveBtn = document.getElementById("arrive");
	let nextStop = "depot";
	let currentStop = "";
	function depart() {
		fetch(`https://judgetests.firebaseio.com/schedule/${nextStop}.json`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data) {
					currentStop = data.name;
					nextStop = data.next;
					departBtn.disabled = true;
					arriveBtn.disabled = false;
					return (displayInfo.textContent = "Next stop " + currentStop);
				}
				displayInfo.textContent = "Error";
				departBtn.disabled = true;
				arriveBtn.disabled = true;
			});
	}

	function arrive() {
		displayInfo.textContent = "Arriving at " + currentStop;
		departBtn.disabled = false;
		arriveBtn.disabled = true;
	}

	return {
		depart,
		arrive
	};
}

let result = solve();
