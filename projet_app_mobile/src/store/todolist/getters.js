export function lists(state) {
    return state.todoLists;
}

export const getList = (state) => (id) => {
    return state.todoLists.find((list) => list.idTodoList === id);
}
