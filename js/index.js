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
// renderBox function
const renderBox = () => {
    const box = document.createElement("div");
    box.classList.add("box");
    const boxContainer = document.querySelector("#boxes");
    boxContainer.appendChild(box);
};

// Call renderBox when needed
// For example, to add a box every time the page loads:
document.addEventListener("DOMContentLoaded", function () {
    renderBox();
});

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
