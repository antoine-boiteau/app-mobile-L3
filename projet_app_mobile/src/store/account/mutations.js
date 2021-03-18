export function signIn(state, data) {
    state.user = data;
}

export function setUserToken(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
}