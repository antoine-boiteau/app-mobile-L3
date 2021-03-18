import axios from 'axios';

export function load({ commit }) {
    axios.get('json/todolists.json')
    .then(function (response) {
        commit("load", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}
