// Needs a #board-name
// Needs a #post-list

import { getBoard, getPosts, getUser } from '../modules/api.js';
import newPost from '../components/post.js';

const name = document.querySelector("#board-name");
const postList = document.querySelector("#post-list");

const boardUrl = window.location.pathname.split("/")[2];
const boardData = (await getBoard("url-" + boardUrl)).data;

name.textContent = boardData.name;
document.title = boardData.name + " | Straw";

const postData = (await getPosts(boardData.id)).data;
for (let post of postData) {
    const authorName = (await getUser(post.author)).data.username;
    const textContent = post.text_content;
    postList.appendChild(newPost(authorName, textContent));
}