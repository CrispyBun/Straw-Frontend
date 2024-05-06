// Needs a #board-card-template (to be cloned)
// Needs a .board-list (to put the clones into)

import { url } from './api.js';

const boardCardTemplate = document.querySelector("#board-card-template");
const list = document.querySelector(".board-list");

const boardsUrl = url + "/board?";
(async () => {
    const boardRequest = await fetch(boardsUrl + new URLSearchParams({
        skip: 0,
        limit: 10
    })).then((response) => {
        return response.json();
    });

    const boardData = boardRequest.data;
    
    for (const board of boardData) {
        const node = boardCardTemplate.content.cloneNode(true);
        node.querySelector(".title").textContent = board.name;
        node.querySelector(".summary").textContent = board.summary;
        list.appendChild(node);
    }
})();

// list.appendChild(boardCardTemplate.content.cloneNode(true));