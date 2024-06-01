const template = document.createElement("template");
template.innerHTML =
`
<section class="digest-card iconless fixed-width">
    <section class="header"><h2>Post name</h2></section>
    <section class="body"><p>Post text</p></section>
</section>
`;

export default (authorName, textContent) => {
    const node = template.content.cloneNode(true);

    node.querySelector(".header > h2").textContent = authorName;
    node.querySelector(".body > p").textContent = textContent;

    return node;
};