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
        image: "../assets/img/affogat.jpg",
    },
    {
        id: 9,
        name: "Irish Coffee",
        roastType: "Dark",
        image: "../assets/img/irish.jpg",
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
        accordionItem.classList.add("default");

        accordionBtn.addEventListener("click", (e) => {
            e.stopPropagation();

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

const createCoffee = (coffees) => {
    const { id, name, roastType, image } = coffees;
    const coffeeCard = document.createElement("div");

    coffeeCard.classList.add("card");
    coffeeCard.style.backgroundImage = `url(${
        image || "../assets/img/deafult.jpg"
    }  )`;
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

    let filteredCoffees = coffees.filter((coffee) => {
        const matchesRoast =
            roastValue === "all" ||
            coffee.roastType.toLowerCase().includes(roastValue.toLowerCase());
        const matchesSearch =
            !searchValue ||
            coffee.name.toLowerCase().includes(searchValue.toLowerCase());

        return matchesRoast && matchesSearch;
    });

    const coffeeContainer = document.querySelector(".card-container");
    coffeeContainer.innerHTML = ""; // Clear previous content

    const coffeeFragment = document.createDocumentFragment();

    for (let coffee of filteredCoffees) {
        coffeeFragment.appendChild(createCoffee(coffee));
    }

    coffeeContainer.appendChild(coffeeFragment);
};

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const handleFilter = (coffees) => {
    const searchInput = document.querySelector("input[type='search']");
    const selectInput = document.querySelector("select");

    searchInput.addEventListener(
        "input",
        debounce(() => {
            updateCoffee(coffees);
        }, 500)
    );

    selectInput.addEventListener("change", () => {
        updateCoffee(coffees);
    });

    updateCoffee(coffees);
};

const saveSelections = () => {
    const formData = new FormData(
        document.querySelector('form[name="options"]')
    );
    const userSelections = {};

    for (let [key, value] of formData.entries()) {
        userSelections[key] = value;
    }
    const newId =
        coffees.reduce((maxId, coffee) => {
            return coffee.id > maxId ? coffee.id : maxId;
        }, 0) + 1;
    userSelections.id = newId;

    coffees.push(userSelections);
    console.log("New Coffee added:", userSelections);
    console.log("Updated coffees:", coffees);
    alert("Your coffee has been added to the menu!");

    updateCoffee(coffees);
    document.querySelector("form[name=options]").reset();

    return userSelections;
};

const userSelections = (selectedValue) => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const selectList = document.querySelector(".display-selection-wrapper ul");
    const inputName = document.querySelector("#name-coffee");

    radioInputs.forEach((radio) => {
        radio.addEventListener("change", (event) => {
            updateListItem(
                event.target.getAttribute("name"),
                event.target.value
            );
        });
    });

    inputName.addEventListener("input", (event) => {
        updateListItem("name", event.target.value);
    });

    const updateListItem = (name, value) => {
        let existingListItem = Array.from(selectList.children).find(
            (li) => li.dataset.name === name
        );
        if (!existingListItem) {
            existingListItem = document.createElement("li");
            existingListItem.classList.add("selection");
            existingListItem.dataset.name = name;
            selectList.appendChild(existingListItem);
        }

        const listItem = document.createElement("p");
        if (name === "roastType") {
            listItem.textContent = `Selected Roast: ${value}`;
        } else if (name === "milk") {
            listItem.textContent = `Selected Milk: ${value}`;
        } else if (name === "flavor") {
            listItem.textContent = `Selected Flavor: ${value}`;
        } else if (name === "size") {
            listItem.textContent = `Selected Size: ${value}`;
        } else if (name === "name") {
            listItem.textContent = `Name: ${value}`;
        }

        // Clear the existing content before adding new content
        while (existingListItem.firstChild) {
            existingListItem.removeChild(existingListItem.firstChild);
        }

        existingListItem.appendChild(listItem);

        const btn = document.querySelector("#saveButton");
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            existingListItem.remove();
        });
    };
};

//MAIN
(() => {
    const radios = document.querySelectorAll(".radio-option");

    radios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            if (radio.checked) {
                userSelections(radio.value);
                console.log(radio.value);
            }
        });
    });

    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", (event) => {
        event.preventDefault();

        const selections = saveSelections();
        console.log(selections);
    });
    toggleList();
    updateCoffee(coffees);
    handleFilter(coffees);
})();
