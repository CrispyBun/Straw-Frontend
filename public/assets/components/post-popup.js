import { postPost } from "../modules/api.js";
import { getToken } from "../modules/user.js";

const template = document.createElement("template");
template.innerHTML =
`
<div id="post-popup-wrapper" class="page-darken">
    <form id="post-popup" class="digest-card iconless one-color fixed-width centered thick-outline shadowed">
        <section class="header"><h2>Make a new post</h2></section>
        <section class="body"><p>What do you want to share?</p></section>
        <section class="inputs">
            <textarea name="text-content" id="text-content"></textarea>
        </section>
        <section class="buttons">
            <button type="submit" id="confirm-button">Post</button>
        </section>
    </form>
</div>
`;

const makePost = async (text) => {
    const boardUrl = window.location.pathname.split("/")[2];
    await postPost("url-" + boardUrl, getToken(), text);
    window.location.reload();
}

export default () => {

    // Only ever allow to instance one of these
    const existingPopup = document.querySelector("#post-popup-wrapper");
    if (existingPopup) existingPopup.remove();

    const node = template.content.cloneNode(true);

    const wrapper = node.querySelector("div.page-darken");
    const popup = node.querySelector("#post-popup");
    const textContent = node.querySelector("#text-content");

    let mouseOverPopup = false;

    popup.addEventListener("mouseenter", () => mouseOverPopup = true);
    popup.addEventListener("mouseleave", () => mouseOverPopup = false);
    
    wrapper.addEventListener("click", () => {
        if (!mouseOverPopup) wrapper.remove();
    })

    popup.addEventListener("submit", (e) => {
        e.preventDefault();
        makePost(textContent.value);
        wrapper.remove();
    })

    return node;
};