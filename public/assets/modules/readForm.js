// Reads the inputs of a form and returns a key-value object of their IDs with their content

export default (form) => {
    const inputs = form.querySelectorAll("input");

    const out = {};
    for (let input of inputs) {
        const id = input.id;
        const isRequired = input.required;
        const value = input.value;

        out[id] = value;
    }

    return out;
}