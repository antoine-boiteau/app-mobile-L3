export function load(state, data) {
    console.log(data);
    state.todoLists = data;
}