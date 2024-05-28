import { isLoggedIn } from "../modules/user.js";

const navbarLinkAccount = document.querySelector("#navbar-link-account");
const navbarLinkProfile = document.querySelector("#navbar-link-profile");
const navbarLinkPost = document.querySelector("#navbar-link-post");
const navbarLinkChat = document.querySelector("#navbar-link-chat");
const navbarLinkHome = document.querySelector("#navbar-link-home");

if (!isLoggedIn()) {
    if (navbarLinkProfile) navbarLinkProfile.style.display = "none";
    if (navbarLinkPost) navbarLinkPost.style.display = "none";
    if (navbarLinkChat) navbarLinkChat.style.display = "none";
    if (navbarLinkAccount) navbarLinkAccount.href = "/login";
}