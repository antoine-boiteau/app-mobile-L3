export function lists(state) {
    return state.todoLists;
}

export const getListName = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    if(res != null)
        return res.name;
    else
        return null;
}

export const getEverytodo = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    if(res != null)
        return res.todos;
    else
        return null;
}

export const getCompletedOnly = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    if(res != null)
        return res.todos.filter(todo => todo.completed);
    else
        return null;
}

export const getUncompletedOnly = (state) => (id) => {
    let res = state.todoLists.find((list) => list.id === id);
    if(res != null)
        return res.todos.filter(todo => !todo.completed);
    else
        return null;
}