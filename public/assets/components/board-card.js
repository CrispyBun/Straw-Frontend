const template = document.createElement("template");
template.innerHTML =
`
<section class="digest-card">
    <div class="icon"></div>
    <section class="header"><h2>Board Title</h2></section>
    <section class="body"><p>Short board summary</p></section>
</section>
`;

export default () => {
    return template.content.cloneNode(true);
};