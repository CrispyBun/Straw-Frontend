// Needs a #board-card-template (to be cloned)
// Needs a .board-list (to put the clones into)

import { getBoards } from './api.js';

const boardCardTemplate = document.querySelector("#board-card-template");
const list = document.querySelector(".board-list");

const boardData = await getBoards(0, 10);

for (const board of boardData) {
    const node = boardCardTemplate.content.cloneNode(true);
    node.querySelector(".header *").textContent = board.name;
    node.querySelector(".body p").textContent = board.summary;
    list.appendChild(node);
}

// list.appendChild(boardCardTemplate.content.cloneNode(true));