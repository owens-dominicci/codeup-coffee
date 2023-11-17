const openTab = (tabId = "show-coffee") => {
    //get the tablinks
    const tabLinks = document.querySelectorAll(".tablink");
    //looping through the tablinks to get the ID and add the active class to the tablink
    for (let tabLink of tabLinks) {
        if (tabLink.getAttribute("data-tab") === tabId) {
            tabLink.classList.add("active");
        } else {
            tabLink.classList.remove("active");
        }
    }
    //targeting the tab-content
    const tabContents = document.querySelectorAll(".tab-content");
    //looping  through the tab content and adding a default of hidden, and active if it's not supposed to be shown
    for (let tabContent of tabContents) {
        tabContent.classList.add("hidden");
        tabContent.classList.remove("active");
    }
    //targeting the tab-content with the data-content attribute that matches the tabId
    const tabContent = document.querySelector(
        `.tab-content[data-content="${tabId}"]`
    );
    //removing the hidden class and adding the active class
    tabContent.classList.remove("hidden");
    tabContent.classList.add("active");
};

const registerTabEvents = () => {
    //get the tablinks
    const tabLinks = document.querySelectorAll(".tablink");
    //looping through the tablinks adding the click event listener, to get the tab ID.
    for (let tabLink of tabLinks) {
        tabLink.addEventListener("click", (e) => {
            //get tab id
            const tabId = e.target.getAttribute("data-tab");
            openTab(tabId);
        });
    }
};

(() => {
    openTab();
    registerTabEvents();
})();
