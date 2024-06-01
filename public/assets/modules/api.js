const url = 'http://localhost:3000';

const parseResponse = async (response) => {
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

const getBoard = async (id) => {
    const response = await fetch(`${url}/board/${id}`);
    return await parseResponse(response);
}

const boardsUrl = url + "/board?";
const getBoards = async (skip = 0, limit = 10) => {
    const response = await fetch(boardsUrl + new URLSearchParams({
        skip: skip,
        limit: limit
    }));
    return await parseResponse(response);
}

const getUser = async (id, token) => {
    const reqHeaders = {};
    if (token) {
        reqHeaders["X-Auth"] = token;
    }

    const response = await fetch(url + `/user/${id}`, {
        method: "GET",
        headers: reqHeaders
    });

    return await parseResponse(response);
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

    return await parseResponse(response);
}

const authenticateUser = async (usernameOrEmail, password) => {

    const usernameKey = usernameOrEmail.includes("@") ? "email" : "username";

    const response = await fetch(url + "/authenticate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            [usernameKey]: usernameOrEmail,
            password: password
        })
    })

    return await parseResponse(response);
}

const postPost = async (boardId, token, textContent) => {
    const response = fetch(`${url}/board/${boardId}/post`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth": token
        },
        body: JSON.stringify({
            textContent: textContent
        })
    })
    return await parseResponse(response);
}

export { url, getBoard, getBoards, registerUser, authenticateUser, getUser, postPost }