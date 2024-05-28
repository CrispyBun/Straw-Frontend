// Needs #username, #email, #password input fields
// Needs a #registration form, in which all the fields are

import { registerUser } from '/assets/modules/api.js';

const usernameField = document.querySelector("form#registration input#username");
const emailField = document.querySelector("form#registration input#email");
const passwordField = document.querySelector("form#registration input#password")
const form = document.querySelector("form#registration");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
});