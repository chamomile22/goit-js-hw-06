"use strict";

const inputedName = document.querySelector("#name-input");
const outputedName = document.querySelector("#name-output");

const handleInputedName = (event) => {
	if (event.currentTarget.value === "") {
		outputedName.textContent = "Anonymous";
	} else {
		outputedName.textContent = event.target.value;
	}
};

inputedName.addEventListener("input", handleInputedName);
