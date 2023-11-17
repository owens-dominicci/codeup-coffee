const extractCoffeeProperties = (coffees) => {
    return coffees.map(({ id, name, roastType }) => ({ id, name, roastType }));
};
const createCoffeeCards = (coffees) => {
    const coffeeContainer = document.querySelector("#coffee-container");

    coffees.forEach((coffee) => {
        const card = document.createElement("div");
        card.classList.add("coffee-card");

        // Adding background image based on roastType (You can replace this with your own logic)
        const backgroundImage = getBackgroundImage(coffee.roastType);
        card.style.backgroundImage = `url('${backgroundImage}')`;

        const content = document.createElement("div");
        content.classList.add("coffee-content");

        const nameElement = document.createElement("h2");
        nameElement.textContent = coffee.name;

        const roastTypeElement = document.createElement("p");
        roastTypeElement.textContent = `Roast Type: ${coffee.roastType}`;

        content.appendChild(nameElement);
        content.appendChild(roastTypeElement);

        card.appendChild(content);
        coffeeContainer.appendChild(card);
    });
};

// Replace this function with your logic to get background image based on roastType
const getBackgroundImage = (roastType) => {
    // Replace this mapping with actual image URLs based on roastType
    const backgroundImageMap = {
        Light: "light-roast-image.jpg",
        Medium: "medium-roast-image.jpg",
        Dark: "dark-roast-image.jpg",
    };

    return backgroundImageMap[roastType] || "default-image.jpg";
};
const renderBox = () => {
    const box = document.createElement("div");
    box.classList.add("box");
    const boxContainer = document.querySelector("#boxes");
    boxContainer.appendChild(box);
};
