<template>
    <div class="sideBar">
        <h1>Ma sideBar :</h1>
        <ul>
            <li v-for="todoList in lists" v-bind:key = "todoList.idTodoList">
            <input type="checkbox" checked v-if="todoList.completed" @change="updateTodo(todoList.idTodoList)">
            <input type="checkbox" v-else @change="updateTodo(todoList.idTodoList)">            
            {{ todoList.name }} 
            <button @click="developTodoList(todoList.idTodoList)"> developper la todolist </button>
            </li>
        </ul>

        <input type="text" id="inputNewTodoList">
        <button @click="createTodoList">Créer la todolist</button>
    </div>
</template>



<script>
import { mapActions, mapGetters } from "vuex";
export default{
    name : 'LeftSideBar',
    methods: {
        developTodoList: function(id){
            this.$emit('updateDisplayedTodoList',id); //on prévient le parent qui est App.vue qu'on demande l'affichage d'une todo, on précise son id
        },
        updateTodo: function(id){
            this.todolists[id-1].completed = !this.todolists[id-1].completed;
            console.log(this.todolists[id-1].completed);
        },
        createTodoList: function(){
            let newName = document.getElementById("inputNewTodoList").value;
            let newId = this.todolists.length+1;
            console.log(newId);
            let newTodoList = {
                idTodoList: newId,
                name: newName,
                completed: false,
                todos: [],
                newTodo: '',
                filter: 'all'
            };
            this.todolists.push(newTodoList);
        },
        ...mapActions("todolist", ["load"]),
    },
    created() {
        this.load();
    },
    computed: {
        ...mapGetters("todolist", ["lists"]),
    }
}


</script>