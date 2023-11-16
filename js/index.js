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
    flavor: ["sugar", "hazelnut", "coconut", "vanilla", "caramel"],
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

const saveSelections = () => {
    const formData = new FormData(
        document.querySelector('form[name="options"]')
    );
    const userSelections = {};

    // Loop through the FormData entries and build the object
    for (let [key, value] of formData.entries()) {
        // Set the selections as sections: values (e.g., roast: light)
        userSelections[key] = value;
    }

    return userSelections;
};

// Add event listener to the button
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const selections = saveSelections();
    console.log(selections); // Output the collected object with selected values
    // You can further process or utilize selections as needed here
});
export const extractCoffeeProperties = (coffees) => {
	return coffees.map(({ id, name, roastType }) => ({ id, name, roastType }));
};
//MAIN
(() => {
	const extractedCoffeeProperties = extractCoffeeProperties(coffees);
	console.log(extractedCoffeeProperties);
    toggleList();
    populateSelect();
})();
