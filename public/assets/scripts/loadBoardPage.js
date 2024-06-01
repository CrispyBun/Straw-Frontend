// Needs a #board-name

import { getBoard } from '../modules/api.js';

const name = document.querySelector("#board-name");

const boardUrl = window.location.pathname.split("/")[2];
const boardData = (await getBoard("url-" + boardUrl)).data;

name.textContent = boardData.name;
document.title = boardData.name + " | Straw";