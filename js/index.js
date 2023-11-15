<<<<<<< HEAD
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
=======
import { coffees } from "./data.js";
//TODO
>>>>>>> c8fc64e5fec17687f73505618eb34883f45de7d9
