// Reads the inputs of a form and returns a key-value object of their IDs with their content
// ID can't be "error", as that's used for returning validation errors

export default (form) => {
    const inputs = form.querySelectorAll("input");

    const out = {error: null};
    for (let i = inputs.length-1; i >= 0; i --) {
        const input = inputs[i];

        const id = input.id;
        const isRequired = input.required;
        const minLength = input.getAttribute("minlength");
        const maxLength = input.getAttribute("maxlength");;
        const pattern = input.pattern;
        const match = input.getAttribute("match");

        const patternTitle = (input.title === "" ? "in the correct format" : input.title);
        const value = input.value;
        const idFormatted = id.replaceAll("-", " ");

        if (isRequired && value === "") out.error = `"${idFormatted}" is required`;
        if (minLength !== null && value.length < minLength) out.error = `"${idFormatted}" must be at least ${minLength} characters long`;
        if (maxLength !== null && value.length > minLength) out.error = `"${idFormatted}" can be a maximum of ${minLength} characters long`;
        if (pattern !== "" && !(new RegExp(pattern).test(value))) out.error = `"${idFormatted}" must be ${patternTitle}`;

        if (match !== undefined) {
            const matchingInput = [...inputs].find((value) => value.id === match);
            if (matchingInput && matchingInput.value !== value) out.error = `"${idFormatted}" does not match`;
        }

        out[id] = value;
    }

    return out;
}