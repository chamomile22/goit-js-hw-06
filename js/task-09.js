function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

const handleColorChanging = (event) => {
	event.preventDefault();
	let gottenColor = getRandomHexColor();
	color.textContent = `${gottenColor}`;
	body.style.backgroundColor = gottenColor;
};

btnChangeColor.addEventListener("click", handleColorChanging);
