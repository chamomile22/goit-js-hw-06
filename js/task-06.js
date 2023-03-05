const textInput = document.querySelector('[data-length = "6"]');

const handleInputValidation = (event) => {
	if (textInput.value.length === Number(textInput.dataset.length)) {
		textInput.classList.add("valid");
		textInput.classList.remove("invalid");
	} else {
		textInput.classList.remove("valid");
		textInput.classList.add("invalid");
	}
};

textInput.addEventListener("blur", handleInputValidation);
