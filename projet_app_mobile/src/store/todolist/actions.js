import httpClient from '@/api/api';

export function load({ commit }) {
    httpClient.get('todolists')
    .then(function (response) {
        commit("load", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function loadTodos({ commit }, id) {
    httpClient.get('todos/' + id)
    .then(function (response) {
        commit("loadTodos", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function createList({ commit }, payload) {
    let name = payload.newListName;
    httpClient.post('todolist', {name})
    .then(function (response) {
        commit("create", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function deleteList({ commit }, id) {
    httpClient.delete('todolist/' + id)
    .then(function () {
        commit("deleteList", id);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function createTodo({ commit }, payload) {
    let name = payload.newTodoName;
    let completed = false;
    let todolist_id = payload.selectedTodoList;
    httpClient.post('todo', {name, completed, todolist_id})
    .then(function (response) {
        commit("createTodo", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function deleteTodo({ commit }, id) {
    httpClient.delete('todo/' + id)
    .then(function () {
        commit("deleteTodo", id);
    })
    .catch(function (error) {
        console.log(error);
    })
}

export function completeTodo({ commit }, payload) {
    let name = payload.name;
    let todolist_id = payload.todolist_id;
    let completed = !payload.completed;
    let id = payload.id;
    httpClient.post('completeTodo/' + id, {name, completed, todolist_id})
    .then(function (response) {
        commit("completeTodo", response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}


export function modifyTodo({commit}, payload) {
    let name = payload.name;
    let id = payload.id;
    httpClient.patch("todo/" + id, {name})
    .then(function(response) {
        commit("modifyTodo", response.data);
    })
    .catch(function(error){
        console.log(error);
    })
}