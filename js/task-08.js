"use strict";

const form = document.querySelector(".login-form");

const handleFormFilling = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		alert("Усі поля форми повинні бути заповнені");
	}

	const formSubmitInfo = {
		[email.name]: email.value,
		[password.name]: password.value,
	};
	console.log(formSubmitInfo);

	event.currentTarget.reset();
};

form.addEventListener("submit", handleFormFilling);
