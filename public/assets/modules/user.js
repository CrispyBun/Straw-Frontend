const decodeToken = (token) => {
    const rawToken = token.substring(7);
    const sections = rawToken.split(".");
    const body = JSON.parse(atob(sections[1]));

    const userId = body.userId;
    const expiryDate = new Date(body.exp * 1000);

    return {
        userId: userId,
        expiryDate: expiryDate
    }
}

const login = (token) => {
    const tokenData = decodeToken(token);
    localStorage.setItem("userId", tokenData.userId);
    localStorage.setItem("token", token);
}

const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
}

const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const tokenData = decodeToken(token);
    const currentDate = new Date();
    if (currentDate > tokenData.expiryDate) {
        logout();
        return false;
    }

    return true;
}

const getId = () => {
    const token = localStorage.getItem("token");
    if (!token) return -1;

    const tokenData = decodeToken(token);
    return tokenData.userId;
}

const getToken = () => {
    return localStorage.getItem("token");
}

export { login, logout, isLoggedIn, getId, getToken }