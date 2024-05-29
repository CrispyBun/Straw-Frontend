// Needs a #username and #email element

import { isLoggedIn, getId, getToken } from "../modules/user.js";
import { getUser } from "../modules/api.js";

if (!isLoggedIn()) {
    window.location.replace("/login");
}
else {
    const usernameElement = document.querySelector("#username");
    const emailElement = document.querySelector("#email");

    const userData = await getUser(getId(), getToken());

    usernameElement.textContent = userData.username;
    emailElement.textContent = userData.email;
}