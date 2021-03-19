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

export const existTodo = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    return res != null ? res.todos.length > 0 : false;
}

export const getEverytodo = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    return res != null ? res.todos : null;
}

export const getCompletedOnly = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    return res != null ? res.todos.filter(todo => todo.completed) : null;
}

export const getUncompletedOnly = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    return res != null ? res.todos.filter(todo => !todo.completed) : null;
}