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

const createCoffee = () => {};
const renderCoffee = () => {};
const updateCoffee = () => {};
const selectCoffee = () => {
    const form = document.querySelectorAll("form[data-roast='selection']");
    console.log(form);
    form.forEach((form) => {
        const userSel = form.querySelector("input[name='roast']");
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
