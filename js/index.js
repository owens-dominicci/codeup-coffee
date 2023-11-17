const coffees = [
    {
        id: 1,
        name: "Espresso",
        roastType: "Dark",
        image: "../assets/img/espresso.jpg",
    },
    {
        id: 2,
        name: "Americano",
        roastType: "Medium",
        image: "../assets/img/americano.jpg",
    },
    {
        id: 3,
        name: "Cappuccino",
        roastType: "Medium",
        image: "../assets/img/cappucino.jpg",
    },
    {
        id: 4,
        name: "Latte",
        roastType: "Light",
        image: "../assets/img/latte.jpg",
    },
    {
        id: 5,
        name: "Mocha",
        roastType: "Dark",
        image: "../assets/img/mocha.jpg",
    },
    {
        id: 6,
        name: "Macchiato",
        roastType: "Medium",
        image: "../assets/img/machiato.jpg",
    },
    {
        id: 7,
        name: "Flat White",
        roastType: "Light",
        image: "../assets/img/flat-white.jpg",
    },
    {
        id: 8,
        name: "Affogato",
        roastType: "Dark",
        image: "../assets/img/affogato.jpg",
    },
    {
        id: 9,
        name: "Irish Coffee",
        roastType: "Dark",
        image: "../assets/img/irish-coffee.jpg",
    },
    {
        id: 10,
        name: "Turkish Coffee",
        roastType: "Dark",
        image: "../assets/img/turkish.jpg",
    },
    {
        id: 11,
        name: "Pour Over",
        roastType: "Light",
        image: "../assets/img/pour-over.jpg",
    },
    {
        id: 12,
        name: "French Press",
        roastType: "Medium",
        image: "../assets/img/french-press.jpg",
    },
    {
        id: 13,
        name: "Vietnamese Iced Coffee",
        roastType: "Dark",
        image: "../assets/img/vietnamese.jpg",
    },
    {
        id: 14,
        name: "Cold Brew",
        roastType: "Dark",
        image: "../assets/img/cold-brew.jpg",
    },
];

const toggleList = () => {
    const accordionDivs = document.querySelectorAll(".accordion");

    accordionDivs.forEach((div) => {
        const accordionItem = div.querySelector("ul");
        const accordionBtn = div.querySelector(".icon-btn");
        const removeBtn = div.querySelector(".remove-btn");
        const addBtn = div.querySelector(".add-btn");

        removeBtn.classList.add("hidden");
        addBtn.classList.add("default");
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

// const populateSelect = () => {
//     const select = document.getElementById("keySelect");

//     for (let key in options) {
//         const option = document.createElement("option");
//         option.value = key;
//         option.textContent = key;
//         select.appendChild(option);
//     }
// };

// const addToOptions = () => {
//     const keyToAdd = document.getElementById("keySelect").value;
//     const valueToAdd = document.getElementById("valueInput").value;

//     if (valueToAdd.trim() !== "") {
//         if (options.hasOwnProperty(keyToAdd)) {
//             options[keyToAdd].push(valueToAdd);
//         } else {
//             options[keyToAdd] = [valueToAdd];
//         }

//         console.log(options); // Display the updated options object
//     } else {
//         alert("Please enter a value to add.");
//     }
// };
const createCoffee = (coffees) => {
    const { id, name, roastType, image } = coffees;
    const coffeeCard = document.createElement("div");
    coffeeCard.classList.add("card");
    coffeeCard.style.backgroundImage = `${image}`;
    coffeeCard.innerHTML = `
            <div class="card-body" id="${id}"></div>
            <div class="card-footer">
            <h2>${name}</h2>
            <p>${roastType}</p>
        </div>
        `;
    return coffeeCard;
};

const updateCoffee = (coffees) => {
    const roastValue = document.querySelector("#menu").value;
    const searchValue = document.querySelector("input[type='search']").value;

    let filteredCoffees = coffees;

    filteredCoffees = filteredCoffees.filter((coffee) => {
        if (!roastValue) {
            return true;
        }
        if (typeof coffee.roastType !== "string") {
            return false;
        }
        return coffee.roastType
            .toLowerCase()
            .includes(roastValue.toLowerCase());
    });

    filteredCoffees = filteredCoffees.filter((coffee) => {
        if (!searchValue) {
            return true;
        }
        if (typeof coffee.name !== "string") {
            return false;
        }
        return coffee.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const coffeeFragment = document.createDocumentFragment();

    for (let coffee of filteredCoffees) {
        coffeeFragment.appendChild(createCoffee(coffee));
    }
    const parent = document
        .querySelector(".card-container")
        .appendChild(coffeeFragment);
};

const handleFilter = (coffees) => {
    const searchInput = document.querySelector("input[type='search']");
    const selectInput = document.querySelector("select");

    const updateCoffeeList = () => {
        const searchValue = searchInput.value;
        const selectValue = selectInput.value;
        updateCoffee(coffees, searchValue, selectValue);
    };

    searchInput.addEventListener("input", updateCoffeeList);
    selectInput.addEventListener("change", updateCoffeeList);
};

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

const userSelections = (selectedValue) => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const selectList = document.querySelector(".display-selection-wrapper ul");

    radioInputs.forEach((radio) => {
        radio.addEventListener("change", (event) => {
            const selectedValue = event.target.value;
            const names = event.target.getAttribute("name");

            let existingListItem = Array.from(selectList.children).find(
                (li) => li.dataset.name === names
            );
            if (!existingListItem) {
                existingListItem = document.createElement("li");
                existingListItem.classList.add("selection");
                existingListItem.dataset.name = names;
                selectList.appendChild(existingListItem);
            }

            const listItem = document.createElement("p");
            if (names === "roast") {
                listItem.textContent = `Selected Roast: ${selectedValue}`;
            } else if (names === "milk") {
                listItem.textContent = `Selected Milk: ${selectedValue}`;
            } else if (names === "flavor") {
                listItem.textContent = `Selected Flavor: ${selectedValue}`;
            } else if (names === "size") {
                listItem.textContent = `Selected Size: ${selectedValue}`;
            }

            // Clear the existing content before adding new content
            while (existingListItem.firstChild) {
                existingListItem.removeChild(existingListItem.firstChild);
            }

            existingListItem.appendChild(listItem);
        });
    });
};

const radios = document.querySelectorAll(".radio-option");

radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
        if (radio.checked) {
            userSelections(radio.value);
            console.log(radio.value);
        }
    });
});

//MAIN
(() => {
    toggleList();
    updateCoffee(coffees);
    handleFilter(coffees);
})();
