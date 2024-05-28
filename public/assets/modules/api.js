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

const registerUser = async (username, email, password) => {
    const response = await fetch(url + "/user", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });
    const data = await response.json();

    if (!response.ok) return {
        success: false,
        data: null,
        error: data.message
    }

    return {
        success: true,
        data: data.data,
        error: null
    }
}

export { url, getBoards, registerUser }