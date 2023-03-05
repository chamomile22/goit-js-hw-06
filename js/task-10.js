function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const inputBoxesAmount = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const WIDTH = 30;
const HEIGHT = 30;

function createBoxes(amount) {
	const firstBox = document.createElement("div");
	firstBox.style.width = `${WIDTH}px`;
	firstBox.style.height = `${HEIGHT}px`;
	firstBox.style.backgroundColor = getRandomHexColor();
	boxes.append(firstBox);

	for (let i = 1; i < amount; i++) {
		const box = document.createElement("div");
		box.style.width = `${WIDTH + 10 * i}px`;
		box.style.height = `${HEIGHT + 10 * i}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxes.append(box);
	}
}

function destroyBoxes() {
	const createdBoxes = document.querySelectorAll("#boxes div");
	createdBoxes.forEach((box) => {
		box.remove();
	});
}

const handleBoxesCreation = () => {
	createBoxes(inputBoxesAmount.value);
};

const handleBoxesDestroying = () => {
	destroyBoxes();
};

btnCreate.addEventListener("click", handleBoxesCreation);
btnDestroy.addEventListener("click", handleBoxesDestroying);
