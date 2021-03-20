export function lists(state) {
    return state.todoLists;
}

export const existList = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    return res != null; 
}

export const getListName = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    return res != null ? res.name : null;
}

export const existTodo = (state) => {
    return state.todos.length > 0;
}

export const getTodosLength = (state) => {
    return state.todos.length;
}

export const getEveryTodo = (state) => {
    return state.todos;
}

export const getCompletedOnly = (state) => {
    return state.todos.filter(todo => todo.completed);
}

export const getUncompletedOnly = (state) => {
    return state.todos.filter(todo => !todo.completed);
}