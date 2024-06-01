// Needs a #username and #email element

import { isLoggedIn, getId, getToken, logout } from "../modules/user.js";
import { getUser } from "../modules/api.js";

if (!isLoggedIn()) {
    window.location.replace("/login");
}
else {
    const usernameElement = document.querySelector("#username");
    const emailElement = document.querySelector("#email");

    const userData = (await getUser(getId(), getToken())).data;
    if (userData) {
        usernameElement.textContent = userData.username;
        emailElement.textContent = userData.email;
    }
    else {
        logout();
        window.location.replace("/login");
    }
}