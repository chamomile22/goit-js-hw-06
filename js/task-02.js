const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsItems = ingredients.map((ing) => {
	// 1
	const ingredient = document.createElement("li");
	// 2
	ingredient.textContent = ing;
	// 3
	ingredient.classList.add(".item");
	return ingredient;
});

// 4
const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsItems);
