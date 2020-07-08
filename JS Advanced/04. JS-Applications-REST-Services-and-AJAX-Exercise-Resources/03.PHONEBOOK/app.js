function attachEvents() {
	const person = document.getElementById("person");
	const phone = document.getElementById("phone");
	const loadBtn = document.getElementById("btnLoad");
	const createBtn = document.getElementById("btnCreate");
	const phonebookUl = document.getElementById("phonebook");
	const url = "http://localhost:3000/phonebook";
	const contacts = [];

	function loadContacts(e) {
		phonebookUl.innerHTML = "";
		contacts.forEach((contact) => {
			const key = Object.keys(contact)[0];
			const currentLi = document.createElement("li");
			currentLi.textContent = `${contact[key].person}:${contact[key].phone}`;
			const deleteBtn = document.createElement("button");
			deleteBtn.textContent = "Delete";
			currentLi.appendChild(deleteBtn);
			phonebookUl.appendChild(currentLi);
			deleteBtn.addEventListener("click", () => {
				currentLi.remove();
				let currentPerson = currentLi.textContent.split(":")[0];
				let index = 0;
				for (let i = 0; i < contacts.length; i++) {
					let key = Object.keys(contacts[i])[0];
					if (contacts[i][key].person === currentPerson) {
						index = i;
						break;
					}
				}
				contacts.splice(index, 1);
			});
		});
	}

	loadBtn.addEventListener("click", loadContacts);

	createBtn.addEventListener("click", () => {
		const newContact = {
			person: person.value,
			phone: phone.value
		};
		fetch(url, {
			method: "POST",
			body: JSON.stringify(newContact)
		})
			.then((res) => res.json())
			.then((res) => {
				contacts.push(res);
				person.value = "";
				phone.value = "";
				loadContacts();
			});
	});
}

attachEvents();
