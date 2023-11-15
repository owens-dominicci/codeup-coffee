const openTab = () => {
    const tabContent = document.querySelectorAll(".tab-content");
    console.log(tabContent);
    const tabLinks = document.querySelectorAll(".tablink");
    const defaultTab = document.querySelector(".default");
    console.log(tabLinks);
    tabContent.forEach((tab) => {
        if (!tab.classList.contains("default")) {
            tab.classList.add("hidden");
        }
    });
    tabLinks.forEach((tab) => {
        if (!tab.classList.contains("default")) {
            tab.classList.remove("active");
        }
        if (tab.classList.contains("active")) {
            tab.classList.remove("active");
        }
    });

    for (tabs of tabLinks) {
        tabs.addEventListener("click", (e) => {
            e.target.classList.add("active");
        });
    }
};

(() => {
    openTab();
})();
