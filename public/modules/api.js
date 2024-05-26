const url = 'http://localhost:3000';

const boardsUrl = url + "/board?";
const getBoards = async (skip = 0, limit = 10) => {
    const response = await fetch(boardsUrl + new URLSearchParams({
        skip: skip,
        limit: limit
    }));
    const boardResponse = await response.json();
    return boardResponse.data;
}

export { url, getBoards }