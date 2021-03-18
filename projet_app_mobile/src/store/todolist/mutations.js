export function load(state, data) {
    state.todoLists = data;
}

export function create(state, data) {
    console.log(state);
    console.log(data);
}

export function deleteList(state, data) {
    console.log(state);
    console.log(data);
}

export function createTodo(state, data) {
    console.log(state);
    console.log(data);
}

export function deleteTodo(state, data) {
    console.log(state);
    console.log(data);
}

export function completeTodo(state, data) {
    console.log(state);
    console.log(data);
}