import jwt from 'jwt-decode' // import dependency

export function decodeUserToken(token) {
    const user = jwt(token)
    return user
}

export function authHeader() {
    const user = localStorage.getItem('user');

    if (user) {
        // for Node.js Express back-end
        return { 'x-access-token': user };
    } else {
        return {};
    }
}