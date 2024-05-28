// Needs #username-or-email, #password input fields
// Needs a #login form, in which all the fields are
// There needs to be a cloaked #error-popup element

import { authenticateUser } from '../modules/api.js';
import { login } from '../modules/user.js';
import readForm from '../modules/readForm.js';

const form = document.querySelector("form#login");
const errorElement = document.querySelector("#error-popup");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formFields = readForm(form);
    const usernameOrEmail = formFields["username-or-email"];
    const password = formFields.password;

    if (formFields.error !== null) {
        errorElement.style.display = "block";
        errorElement.innerHTML = `<p>${formFields.error}</p>`
        return;
    }

    const res = await authenticateUser(usernameOrEmail, password);
    if (!res.success) {
        errorElement.style.display = "block";
        errorElement.innerHTML = `<p>${res.error}</p>`
        return;
    }

    login(res.data.token);

    window.location.replace("/");
});