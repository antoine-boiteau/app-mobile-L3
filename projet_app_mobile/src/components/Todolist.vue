<template>
    <div class="todolist">
        <h1 @click="afficherTodos()">Ma todo :</h1>
        <ul>
            <li v-for="todo in filteredTodos" :key = "todo">
            <input type="checkbox" checked v-if="todo.completed" @change="updateTodo(todo)">
            <input type="checkbox" v-else @change="updateTodo(todo)">
            
            {{ todo.name }} 

            <button @click="deleteTodo(todo.id)"> supprimer la todo </button>
            </li>
        </ul>
        
        <button @click="showEveryTodos">Tout voir</button>
        <button @click="showNotCompleteds">Complétés</button>
        <button @click="showCompleteds">À faire</button>
        <br>
        <input type="text" id="inputNewTodo">
        <button @click="createTodo">Créer la todo</button>
    </div>

</template>


<script>
export default{
    name : 'Todolist',
    data(){
            return{
            todos: [
                {
                    id: 1,
                    name: 'tache 1',
                    completed: false
                },
                {
                    id: 2,
                    name: 'tache 2',
                    completed: true
                },
                {
                    id: 3,
                    name: 'tache 3',
                    completed: true
                }
            ],
            newTodo: '',
            filter: 'all',
            }
        },
    methods: {
        afficherTodos: function(){
            console.log(this.todos);
        },
        updateTodo: function(todo){
            todo.completed = !todo.completed;
        },
        deleteTodo: function(id){
            this.todos.splice(id-1,1);
            for(let todo of this.todos){
                console.log(todo.id);
                if(id < todo.id){
                    todo.id = todo.id -1;
                }
            }
        },
        createTodo: function(){
            let newName = document.getElementById("inputNewTodo").value;
            let newId = this.todos.length+1;
            let newTodo = {
                id: newId,
                name: newName,
                completed: false
            }
            this.todos.push(newTodo);
        },
        showEveryTodos: function(){
            this.filter= 'all';
        },
        showCompleteds: function(){
            this.filter= 'uncompleted';
        },
        showNotCompleteds: function(){
            this.filter= 'completed';
        }
    },
    computed: {
        filteredTodos: function (){
            if (this.filter == 'uncompleted'){
                return this.todos.filter(todo => !todo.completed)
            }
            else if (this.filter == 'completed'){
                return this.todos.filter(todo => todo.completed)
            }
            return this.todos
        }
    }
}

</script>

