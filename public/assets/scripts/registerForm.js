// Needs #username, #email, #password input fields
// Needs a #registration form, in which all the fields are
// There needs to be a cloaked a #error-popup element

import { registerUser } from '../modules/api.js';
import readForm from '../modules/readForm.js';

const form = document.querySelector("form#registration");
const errorElement = document.querySelector("#error-popup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formFields = readForm(form);
    const username = formFields.username;
    const email = formFields.email;
    const password = formFields.password;

    if (formFields.error !== null) {
        errorElement.style.display = "block";
        errorElement.innerHTML = `<p>${formFields.error}</p>`
        return;
    }

    const res = await registerUser(username, email, password);
    if (!res.success) {
        errorElement.style.display = "block";
        errorElement.innerHTML = `<p>${res.error}</p>`
        return;
    }

    window.location.replace("/login");
});