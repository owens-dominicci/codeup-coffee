//import { coffees } from "/js/data.js";
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
function toggleList(element) {
	// Toggle the visibility of the nested ul element
	const nestedList = element.querySelector('ul');
	nestedList.style.display = (window.getComputedStyle(nestedList).display === 'none') ? 'block' : 'none';
}


//MAIN
(() => {

})();

