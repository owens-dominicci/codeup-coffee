const toggleList = () => {
    const accordionDivs = document.querySelectorAll(".accordion");

    accordionDivs.forEach((div) => {
        const accordionItem = div.querySelector("ul");
        const accordionBtn = div.querySelector(".icon-btn");
        const removeBtn = div.querySelector(".remove-btn");
        const addBtn = div.querySelector(".add-btn");

        removeBtn.classList.add("hidden");
        addBtn.classList.add("display");
        accordionItem.classList.add("default"); // Initially hide all accordion items

        accordionBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent unnecessary event bubbling

            accordionItem.classList.toggle("default");
            accordionItem.classList.toggle("display");

            removeBtn.classList.toggle("hidden");
            addBtn.classList.toggle("hidden");
        });
    });
};

const options = {
    roast: ["light", "medium", "dark"],
    milk: ["whole", "2%", "skim", "almond", "oat", "soy"],
    sweetener: ["sugar", "hazelnut", "coconut", "vanilla", "caramel"],
    size: ["small", "medium", "large"],
};

// renderBox function
// const renderAccordionItems = () => {
//     for (let option in options) {
//         const accordionSelection = document.createElement("div");
//         accordionSelection.classList.add(`accordion ${option}`);
//     }
//     const boxContainer = document.querySelector("#roast-sel");
//     boxContainer.appendChild(box);
// };

// Call renderBox when needed
// For example, to add a box every time the page loads:
// document.addEventListener("DOMContentLoaded", function () {
//     renderBox();
// });

const createCoffee = () => {};
const renderCoffee = () => {};
const updateCoffee = () => {};
const selectCoffee = () => {
    const roastOptions = document.querySelectorAll(
        "form[data-roast='selection']"
    );
    console.log(roastOptions);
    roastOptions.forEach((roast) => {
        const userSel = roast.querySelector("input[name='roast']");
        userSel.addEventListener("change", (e) => {
            console.log(e.target.value);
        });
    });
};
//MAIN
(() => {
    toggleList();
    selectCoffee();
})();
