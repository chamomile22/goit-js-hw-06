// 1
const categories = document.querySelectorAll("#categories>.item");
console.log("Number of categories: " + categories.length);

// 2
categories.forEach((category) => {
	console.log("Category: " + category.querySelector("h2").textContent);
	console.log("Elements: " + category.querySelectorAll("ul>li").length);
});
