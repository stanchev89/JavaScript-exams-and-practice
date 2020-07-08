function attachEvents() {
	const textArea = document.getElementById("messages");
	const name = document.getElementById("author");
	const message = document.getElementById("content");
	const sendBtn = document.getElementById("submit");
	const refreshBtn = document.getElementById("refresh");
	const url = "http://localhost:3000/messenger";

	sendBtn.addEventListener("click", () => {
		const currentPerson = {
			author: name.value,
			content: message.value
		};
		fetch(url, {
			method: "POST",
			body: JSON.stringify(currentPerson)
		});
		name.value = "";
		message.value = "";
	});
	refreshBtn.addEventListener("click", () => {
		fetch(url).then((res) => res.json()).then((data) => {
			const allMessages = data.map((x) => `${x.author}: ${x.content}`);
			textArea.textContent = allMessages.join("\n");
		});
	});
}

attachEvents();
