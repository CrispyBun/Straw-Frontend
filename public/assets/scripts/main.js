// To be loaded on every page,
// takes care of elements that will be on 90% of pages

import newNavbar from "../components/navbar.js";

// Load navbar on pages
const navbarComponent = document.querySelector("#navbar");
if (navbarComponent) {
    navbarComponent.replaceWith(newNavbar());
}