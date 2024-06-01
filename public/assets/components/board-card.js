const template = document.createElement("template");
template.innerHTML =
`
<a class="digest-card">
    <div class="icon"></div>
    <section class="header"><h2>Board Title</h2></section>
    <section class="body"><p>Short board summary</p></section>
</a>
`;

export default (name, summary, url) => {
    const node = template.content.cloneNode(true);

    if (name) node.querySelector(".header *").textContent = name;
    if (summary) node.querySelector(".body p").textContent = summary;
    if (url) node.querySelector("a").href = "board/" + url;

    return node;
};