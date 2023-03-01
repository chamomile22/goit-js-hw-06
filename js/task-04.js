"use strict";

const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;
const handelClickMinus = (event) => {
	event.preventDefault();
	counterValue -= 1;
	value.innerHTML = `<span>${counterValue}</span>`;
};
const handelClickPlus = (event) => {
	event.preventDefault();
	counterValue += 1;
	value.innerHTML = `<span>${counterValue}</span>`;
};

decr.addEventListener("click", handelClickMinus);
incr.addEventListener("click", handelClickPlus);
