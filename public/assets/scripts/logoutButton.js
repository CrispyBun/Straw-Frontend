// needs a #logout-button

import { logout } from "../modules/user.js";

document.querySelector("#logout-button").addEventListener("click", (e) => {
    logout();
    window.location.replace("/");
})