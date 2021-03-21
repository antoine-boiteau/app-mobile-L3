export function load(state, data) {
    state.todoLists = data;
}

export function loadTodos(state, data) {
    state.todos = data;
}

export function create(state, data) {
    state.todoLists.push(data);
}

export function deleteList(state, id) {
    state.todoLists = state.todoLists.filter(list => list.id !== id);
}

export function createTodo(state, data) {
    state.todos.push(data);
}

export function deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
}

export function completeTodo(state, data) {
    state.todos.find(todo => todo.id === data.id).completed = !state.todos.find(todo => todo.id === data.id).completed;
}