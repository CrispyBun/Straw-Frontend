// To be loaded on every page,
// takes care of elements that will be on 90% of pages

import { isLoggedIn } from "../modules/user.js";

const navbarLinkAccount = document.querySelector("#navbar-link-account");
const navbarLinkProfile = document.querySelector("#navbar-link-profile");
const navbarLinkPost = document.querySelector("#navbar-link-post");
const navbarLinkChat = document.querySelector("#navbar-link-chat");

// Toggle navbar links based on login

if (!isLoggedIn()) {
    if (navbarLinkProfile) navbarLinkProfile.style.display = "none";
    if (navbarLinkPost) navbarLinkPost.style.display = "none";
    if (navbarLinkChat) navbarLinkChat.style.display = "none";
    if (navbarLinkAccount) navbarLinkAccount.href = "/login";
}

// Navbar hide button functionality

const openNavbar = (navbar, skipAnimation) => {
    if (skipAnimation) {
        navbar.style.transition = "none";
        navbarButton.style.transition = "none";
    }

    navbar.style.left = "-77px";
    navbarButton.style.left = "77px";
    navbarButton.style.transform = "rotate(180deg)";
}

const closeNavbar = (navbar, skipAnimation) => {
    if (skipAnimation) {
        navbar.style.transition = "none";
        navbarButton.style.transition = "none";
    }

    navbar.style.left = null;
    navbarButton.style.position = null;
    navbarButton.style.left = null;
    navbarButton.style.transform = null;
}

const navbar = document.querySelector("#navbar");
const navbarButton = document.querySelector("#navbar-button-back");

let navbarClosed = sessionStorage.getItem("navbarIsClosed") === "true";

if (navbar && navbarButton) {
    if (navbarClosed) closeNavbar(navbar, true);
    else openNavbar(navbar, true);
    
    navbarButton.addEventListener("click", () => {
        navbar.style.transition = null;
        navbarButton.style.transition = null;

        if (!navbarClosed) {
            closeNavbar(navbar);
            navbarClosed = true;
        }
        else {
            openNavbar(navbar);
            navbarClosed = false;
        }
        sessionStorage.setItem("navbarIsClosed", navbarClosed);
    })
}