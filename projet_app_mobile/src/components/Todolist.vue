<template>
    <div class="todolist">
        <!--<h1 @click="afficherTodos()">Ma todo :</h1>
        <ul>
            <li v-for="todo in filteredTodos" :key = "todo.id">
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
        <button @click="createTodo">Créer la todo</button>-->

        <h2> {{ getName }} </h2>
        <button @click="showEveryTodos">Tout voir</button>
        <button @click="showCompleteds">Complétés</button>
        <button @click="showNotCompleteds">À faire</button>
        <ul>
            <li v-for="todo in filteredTodos" :key = "todo.id">
            <input type="checkbox" checked v-if="todo.completed" @change="updateTodo(todo.name, todo.todolist_id, todo.completed, todo.id)">
            <input type="checkbox" v-else @change="updateTodo(todo.name, todo.todolist_id, todo.completed, todo.id)">
            {{ todo.name }}
            <button @click="deleteTodo(todo.id)"> supprimer la todo </button>
            </li>
        </ul>
        <input type="text" name="newTodoName" v-model="newTodoName">
        <button @click="createTodo({newTodoName,selectedTodoList})">Créer la todo</button>
    </div>

</template>


<script>
import  { mapActions, mapGetters } from "vuex";
export default{
    name: 'Todolist',
    data(){
            return{
                newTodoName: '',
                filter: 'all'
            }
        },
    props: {
        selectedTodoList: {type: Number, default: 1}
    },
    methods: {
        showEveryTodos: function(){
            this.filter= 'all';
        },
        showCompleteds: function(){
            this.filter= 'completed';
        },
        showNotCompleteds: function(){
            this.filter= 'uncompleted';
        },
        ...mapActions('todolist', ["createTodo", "deleteTodo", "completeTodo"]),
        updateTodo: function(name, todolist_id, completed, id) {
            this.completeTodo({name, todolist_id, completed, id});
        }
    },
    computed: {
        ...mapGetters('todolist', ["getListName", "getEverytodo", "getCompletedOnly", "getUncompletedOnly"]),
        filteredTodos: function (){
            if (this.filter == 'uncompleted'){
                return this.getUncompletedOnly(this.selectedTodoList);
            }
            else if (this.filter == 'completed'){
                return this.getCompletedOnly(this.selectedTodoList);
            }
            return this.getEverytodo(this.selectedTodoList);
        },
        getName: function () {
            return this.getListName(this.selectedTodoList);
        }
    }
}

</script>

