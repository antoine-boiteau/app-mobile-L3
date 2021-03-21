import httpClient from '@/api/api';
import router from '../../router';

export function login({ commit }, payload) {
    let email = payload.email;
    let password = payload.password;
    httpClient.post('login', {email,password})
    .then(function (response) {
        commit("setUserToken", response.data.token);
        router.push('/');
    })
    .catch(function (error) {
        alert(error.response.data.error);
    })
}

export function register({ commit }, payload) {
    let name = payload.name;
    let email = payload.email;
    let password = payload.password;
    httpClient.post('register', {name,email,password})
    .then(function (response) {
        commit("setUserToken", response.data.token);
        router.push('/');
    })
    .catch(function (error) {
        if(error.response.data.errors != null)
            alert(error.response.data.errors[0]);
        else
            alert(error.response.data.message);
    })
}

export function getUser({ commit }) {
    httpClient.get('user')
    .then(function (response) {
        commit("getUser", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}