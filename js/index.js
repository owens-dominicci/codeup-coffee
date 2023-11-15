// const toggleList = () => {
//     const accordionDiv = document.querySelectorAll(".accordion");
//     const accordionItem = document.querySelectorAll(".accordion ul");
//     for (let item of accordionItem) {
//         const itemId = item.getAttribute("[data-list]");
//         item.classList.add("hidden");
//     }
//     for (let div of accordionDiv) {
//         div.addEventListener("click", (e) => {
//             const accordionItem = div.querySelector("ul");
//             accordionItem.classList.add("display");
//             accordionItem.classList.remove("hidden");
//             const accordionBtn = div.querySelector(".icon-button");
//             accordionBtn.addEventListener("click", (e) => {});
//         });
//     }
// };

const toggleList = () => {
    const accordionDivs = document.querySelectorAll(".accordion");
    accordionDivs.forEach((div) => {
        const accordionItem = div.querySelector("ul");
        const accordionBtn = div.querySelector(".icon-btn");
        const removeBtn = div.querySelector(".remove-btn");
        const addBtn = div.querySelector(".add-btn");
        removeBtn.classList.add("hidden");
        addBtn.classList.add("display");
        accordionItem.classList.add("hidden"); // Initially hide all accordion items

        accordionBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent unnecessary event bubbling
            // Toggle visibility of accordion item
            if (accordionItem.classList.contains("hidden")) {
                // If hidden, show the item
                accordionItem.classList.remove("hidden");
                accordionItem.classList.add("display");
                //
                removeBtn.classList.remove("hidden");
                addBtn.classList.add("hidden");
            } else {
                // If displayed, hide the item
                accordionItem.classList.add("hidden");
                accordionItem.classList.remove("display");
                //
                removeBtn.classList.remove("display");
                removeBtn.classList.add("hidden");
                //
                addBtn.classList.remove("hidden");
                addBtn.classList.add("display");
            }
        });
    });
};

//MAIN
(() => {
    toggleList();
})();
