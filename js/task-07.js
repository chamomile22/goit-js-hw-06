"use strict";

const sizeController = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleTextSize = () => {
	text.style.fontSize = `${sizeController.value}px`;
};

sizeController.addEventListener("input", handleTextSize);
