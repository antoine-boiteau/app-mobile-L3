<template>
    <div class="sideBar">
        <h1>Mes listes :</h1>
        <ul v-if="lists.length > 0">
            <li v-for="todoList in lists" v-bind:key = "todoList.id">
            <button @click="developTodoList(todoList.id)" class="todolistClickable"> {{ todoList.name }} </button>
            <button @click="del(todoList.id)">X</button>
            </li>
        </ul>
        <b v-else>Vous n'avez aucune liste pour le moment !</b><br>

        <input type="text" placeholder="Nouvelle todolist" name="newListName" v-model="newListName">
        <button @click="create(newListName)">Créer la todolist</button>
    </div>
</template>



<script>
import { mapActions, mapGetters } from "vuex";
export default{
    name : 'LeftSideBar',
    data() {
        return {
            newListName: '',
        }
    },
    methods: {
        developTodoList: function(id){
            this.loadTodos(id);
            this.$emit('updateDisplayedTodoList',id); //on prévient le parent qui est Home.vue qu'on demande l'affichage d'une todo, on précise son id
        },
        ...mapActions("todolist", ["load", "createList", "deleteList", "loadTodos"]),
        del: function(id) {
            this.deleteList(id);
            setTimeout(this.load, 200);
        },
        create: function(newListName) {
            this.createList({newListName});
            setTimeout(this.load, 200);
        }
    },
    computed: {
        ...mapGetters("todolist", ["lists"]),
        ...mapGetters('account', ['userToken'])
    },
    created() {
        this.load();
    }
}


</script>

<style>
.todolistClickable{
  padding: 10px;
  background-color : #fffae1 ;
  font-size: 25px;
}


</style>
