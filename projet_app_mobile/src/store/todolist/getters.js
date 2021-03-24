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

export const getUncompletedTodo = (state) => (id) => {
    let lists = state.todoLists.find(todoList => todoList.id === id).todos;
    return lists != null ? lists.filter( toudou => !toudou.completed).length : 0;
}

export const getAllUncompleted = (state) =>{
    var acc = 0;
    for(const list in state.todoLists){
        if(state.todoLists[list].todos != null) {
            acc += (state.todoLists[list].todos.filter(toudou => !toudou.completed).length);
        }
    }
    return acc;
}

export const getLogOut = (state) => {
    state.todoLists = [];
    state.todos = [];
}