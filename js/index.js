import { coffee } from "./data.js";
const renderCoffeeElement = (coffee) => {
	let tr = document.querySelector('.tr').createElement("tr");
	tr.classList.add("coffee");

	tr.innerHTML = `
        <td>${coffee.id}</td>
        <td>${coffee.name}</td>
        <td>${coffee.roastType}</td>
    `;
	return tr;
};
//MAIN
(() => {

})();
