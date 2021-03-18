import axios from 'axios';

export function login({ commit }, payload) {
    let email = payload.email;
    let password = payload.password;
    axios.post('http://138.68.74.39/api/login', {email,password})
    .then(function (response) {
        commit("setUserToken", response.data.token);
    })
    .catch(function (error) {
        alert(error.response.data.error);
    })
}

export function register({ commit }, payload) {
    let name = payload.name;
    let email = payload.email;
    let password = payload.password;
    axios.post('http://138.68.74.39/api/register', {name,email,password})
    .then(function (response) {
        commit("setUserToken", response.data.token);
    })
    .catch(function (error) {
        if(error.response.data.errors != null)
            alert(error.response.data.errors[0]);
        else
            alert(error.response.data.message);
    })
}

export function getUser({ commit }) {
    axios.get('http://138.68.74.39/api/user')
    .then(function (response) {
        commit("signIn", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}