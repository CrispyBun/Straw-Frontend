// Needs a .board-list (to put the clones into)

import { getBoards } from '../modules/api.js';
import newBoardCard from '../components/board-card.js';

const list = document.querySelector(".board-list");

const boardData = await getBoards(0, 10);

for (const board of boardData) {
    const node = newBoardCard();
    node.querySelector(".header *").textContent = board.name;
    node.querySelector(".body p").textContent = board.summary;
    list.appendChild(node);
}