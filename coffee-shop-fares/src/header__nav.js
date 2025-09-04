const path = window.location.hash || window.location.pathname;

const navListElements = /** @type {NodeListOf<HTMLLIElement>} */ (
    document.querySelectorAll("#headerNavList > li")
);

for (const navListElement of navListElements) {
    const navListElementLink = /** @type {HTMLAnchorElement} */ (
        navListElement.querySelector("a")
    );

    navListElement.classList.remove("header__nav-item--active");

    if (navListElementLink.getAttribute("href") === path) {
        navListElement.classList.add("header__nav-item--active");
    }
}
