const coffees = [
    { id: 1, name: "Espresso", roastType: "Dark" },
    { id: 2, name: "Americano", roastType: "Medium" },
    { id: 3, name: "Cappuccino", roastType: "Medium" },
    { id: 4, name: "Latte", roastType: "Light" },
    { id: 5, name: "Mocha", roastType: "Dark" },
    { id: 6, name: "Macchiato", roastType: "Medium" },
    { id: 7, name: "Flat White", roastType: "Light" },
    { id: 8, name: "Affogato", roastType: "Dark" },
    { id: 9, name: "Irish Coffee", roastType: "Dark" },
    { id: 10, name: "Turkish Coffee", roastType: "Dark" },
    { id: 11, name: "Pour Over", roastType: "Light" },
    { id: 12, name: "French Press", roastType: "Medium" },
    { id: 13, name: "Vietnamese Iced Coffee", roastType: "Dark" },
    { id: 14, name: "Cold Brew", roastType: "Dark" },
];

const renderCoffeeElement = (coffee) => {
    let tr = document.querySelector(".tr").createElement("tr");
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
    const nestedList = element.querySelector("ul");
    nestedList.style.display =
        window.getComputedStyle(nestedList).display === "none"
            ? "block"
            : "none";
}

//MAIN
(() => {})();
