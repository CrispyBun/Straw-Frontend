// Needs a #board-list (to put the clones into)

import { getBoards } from '../modules/api.js';
import newBoardCard from '../components/board-card.js';

const list = document.querySelector("#board-list");

const boardData = (await getBoards(0, 10)).data;

for (const board of boardData) {
    const node = newBoardCard(board.name, board.summary, board.url);
    list.appendChild(node);
}