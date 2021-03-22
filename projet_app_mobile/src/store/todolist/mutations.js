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
    state.todoLists.find(list => list.id === data.todolist_id).todos.push(data);
}

export function deleteTodo(state, data) {
    state.todos = state.todos.filter(todo => todo.id !== data.todoId);
    state.todoLists.find(list => list.id === data.listId).todos = state.todoLists.find(list => list.id === data.listId).todos.filter(todo => todo.id !== data.todoId);
}

export function completeTodo(state, data) {
    state.todoLists.find(list => list.id === data.todolist_id).todos.find(todo => todo.id === data.id).completed = !state.todoLists.find(list => list.id === data.todolist_id).todos.find(todo => todo.id === data.id).completed
    state.todos.find(todo => todo.id === data.id).completed = !state.todos.find(todo => todo.id === data.id).completed;
}

export function modifyTodo(state, data) {
    state.todos.find(todo => todo.id === data.id).name = data.name;
}