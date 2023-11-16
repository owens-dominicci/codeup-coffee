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

const populateSelect = () => {
    const select = document.getElementById("keySelect");

    for (let key in options) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        select.appendChild(option);
    }
};

const addToOptions = () => {
    const keyToAdd = document.getElementById("keySelect").value;
    const valueToAdd = document.getElementById("valueInput").value;

    if (valueToAdd.trim() !== "") {
        if (options.hasOwnProperty(keyToAdd)) {
            options[keyToAdd].push(valueToAdd);
        } else {
            options[keyToAdd] = [valueToAdd];
        }

        console.log(options); // Display the updated options object
    } else {
        alert("Please enter a value to add.");
    }
};

const createCoffee = () => {};
const renderCoffee = () => {};
const updateCoffee = () => {};

const selectCoffee = (callback) => {
    let userSelection = {
        category: "option",
    };
    const roastOptions = document.querySelectorAll(
        "form[data-select='selection']"
    );
    console.log(roastOptions);
    roastOptions.forEach((roast) => {
        const userSel = roast.querySelectorAll("input[name='options']");
        for (let selection of userSel) {
            selection.addEventListener("change", (e) => {
                // console.log(e.target.value);
                userSelection = { roast: e.target.value };
                if (callback && typeof callback === "function") {
                    callback(userSelection); // Pass the updated selection to the callback
                }
            });
        }
    });
    return userSelection;
};
//MAIN
(() => {
    toggleList();
    selectCoffee((updatedSelection) => {
        console.log(updatedSelection);
    });
    populateSelect();
})();
