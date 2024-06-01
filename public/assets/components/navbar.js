import { getUser } from "../modules/api.js";
import { isLoggedIn, getId } from "../modules/user.js";

const template = document.createElement("template");
template.innerHTML =
`
<nav class="navbar" id="navbar">
    <a id="navbar-link-account" href="/account"><img class="profile-picture" src="/assets/img/missing-pfp.png" alt="Profile picture"></a>
    <div class="spacer-line"></div>
    <a id="navbar-link-profile" href=""><img src="/assets/img/icon/profile.svg" alt="Profile icon"></a>
    <a id="navbar-link-post" href=""><img src="/assets/img/icon/plus.svg" alt="Plus icon"></a>
    <a id="navbar-link-chat" href=""><img src="/assets/img/icon/chat-filled.svg" alt="Home icon"></a>
    <a id="navbar-link-home" href="/"><img src="/assets/img/icon/home.svg" alt="Home icon"></a>
    <div class="spacer-grow"></div>
    <button id="navbar-button-back"><img src="/assets/img/icon/arrow-left.svg" alt="Back"></button>
</nav>
`;

const updateProfileLink = async (profileLinkElement) => {
    const res = await getUser(getId());
    profileLinkElement.href = "/user/" + res.data.url;
}

const openNavbar = (navbar, navbarButton, skipAnimation) => {
    if (skipAnimation) {
        navbar.style.transition = "none";
        navbarButton.style.transition = "none";
    }

    navbar.style.left = "-77px";
    navbarButton.style.left = "77px";
    navbarButton.style.transform = "rotate(180deg)";
}

const closeNavbar = (navbar, navbarButton, skipAnimation) => {
    if (skipAnimation) {
        navbar.style.transition = "none";
        navbarButton.style.transition = "none";
    }

    navbar.style.left = null;
    navbarButton.style.position = null;
    navbarButton.style.left = null;
    navbarButton.style.transform = null;
}

export default () => {
    const node = template.content.cloneNode(true);

    const navbarLinkAccount = node.querySelector("#navbar-link-account");
    const navbarLinkProfile = node.querySelector("#navbar-link-profile");
    const navbarLinkPost = node.querySelector("#navbar-link-post");
    const navbarLinkChat = node.querySelector("#navbar-link-chat");

    // Toggle navbar links based on login

    if (!isLoggedIn()) {
        if (navbarLinkProfile) navbarLinkProfile.style.display = "none";
        if (navbarLinkPost) navbarLinkPost.style.display = "none";
        if (navbarLinkChat) navbarLinkChat.style.display = "none";
        if (navbarLinkAccount) navbarLinkAccount.href = "/login";
    }
    else {
        updateProfileLink(navbarLinkProfile);
    }

    // Navbar hide button functionality

    const navbar = node.querySelector("#navbar");
    const navbarButton = node.querySelector("#navbar-button-back");

    let navbarClosed = sessionStorage.getItem("navbarIsClosed") === "true";

    if (navbarClosed) closeNavbar(navbar, navbarButton, true);
    else openNavbar(navbar, navbarButton, true);

    navbarButton.addEventListener("click", () => {
        navbar.style.transition = null;
        navbarButton.style.transition = null;

        if (!navbarClosed) {
            closeNavbar(navbar, navbarButton);
            navbarClosed = true;
        }
        else {
            openNavbar(navbar, navbarButton);
            navbarClosed = false;
        }
        sessionStorage.setItem("navbarIsClosed", navbarClosed);
    })

    return node;
};