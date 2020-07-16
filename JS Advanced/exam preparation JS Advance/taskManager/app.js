function solve() {
	const taskInput = document.getElementById("task");
	const descriptionInput = document.getElementById("description");
	const dateInput = document.getElementById("date");
	const [ graySection, orangeSection, yellowSection, greenSection ] = Array.from(
		document.querySelectorAll("section")
	);

	document.querySelector("#add").addEventListener("click", onClick);

	function onClick(e) {
		e.preventDefault();
		if (taskInput.value === "" || descriptionInput.value === "" || dateInput.value === "") {
			return;
		}
		let newArticle = document.createElement("article");
		const newH3 = createElement("h3", "", taskInput.value, newArticle);
		let p1Content = `Description: ${descriptionInput.value}`;
		const newP1 = createElement("p", "", p1Content, newArticle);
		let p2Content = `Due Date: ${dateInput.value}`;
		const newP2 = createElement("p", "", p2Content, newArticle);

		let newDivBtns = createElement("div", { classList: "flex" }, "", newArticle);
		let startBtn = createElement("button", { classList: "green" }, "Start", newDivBtns);
		let deleteBtn = createElement("button", { classList: "red" }, "Delete", newDivBtns);
		let finishBtn = createElement("button", { classList: "orange" }, "Finish");

		orangeSection.children[1].appendChild(newArticle);

		startBtn.addEventListener("click", () => {
			yellowSection.children[1].appendChild(newArticle);
			startBtn.remove();
			newDivBtns.appendChild(finishBtn);
		});

		deleteBtn.addEventListener("click", () => {
			newArticle.remove();
		});

		finishBtn.addEventListener("click", () => {
			greenSection.children[1].appendChild(newArticle);
			newDivBtns.remove();
		});
	}

	function createElement(type, attributes, textContent, parent) {
		let result = document.createElement(type);
		if (attributes !== undefined) {
			Object.assign(result, attributes);
		}
		if (textContent !== "" && textContent !== undefined) {
			result.textContent = textContent;
		}
		if (parent !== undefined) {
			return parent.appendChild(result);
		}
		return result;
	}
}
