import axios from 'axios';

export function login(email, password, { commit }) {
    axios.post('http://138.68.74.39/api/login?email=' + email + '&password=' + password)
    .then(function (response) {
        console.log(response.data);
        commit("signIn", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function register(name, email, password, { commit }) {
    console.log("coucou");
    axios.post('http://138.68.74.39/api/register?name=' + name + '&email=' + email + '&password=' + password)
    .then(function (response) {
        console.log(response.data);
        commit("signIn", response.data);
    })
    .catch(function (error) {
        console.log(error);
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