// Requires apiUrl variable

// Needs a #board-card-template (to be cloned)
// Needs a .board-list (to put the clones into)
const boardCardTemplate = document.querySelector("#board-card-template");
const list = document.querySelector(".board-list");

const boardsUrl = apiUrl + "/board?";
(async () => {
    const boardRequest = await fetch(boardsUrl + new URLSearchParams({
        skip: 0,
        limit: 10
    })).then((response) => {
        return response.json();
    });

    const boardData = boardRequest.data;
    
    for (board of boardData) {
        const node = boardCardTemplate.content.cloneNode(true);
        node.querySelector(".title").textContent = board.name;
        // node.querySelector(".description").textContent = board.name;
        list.appendChild(node);
    }
})();

// list.appendChild(boardCardTemplate.content.cloneNode(true));