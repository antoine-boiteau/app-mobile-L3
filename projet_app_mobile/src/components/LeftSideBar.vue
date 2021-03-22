<template>
    <div class="sideBar">
        <p><button @click="logOut">Se déconnecter</button>
        <b> Bienvenue {{ this.getUserName }} ! </b></p>

        <h1>Mes listes :</h1>
        <h4 v-if ="lists.length > 0">Nombre de todos restants ({{  this.getAllUncompleted }})</h4>
        <p><input type="text" placeholder="Nouvelle todolist" name="newListName" v-model="newListName">
        <button @click="createList({newListName})">Créer une todolist</button> </p>
        <ul v-if="lists.length > 0">
            <li v-for="todoList in lists" v-bind:key = "todoList.id">
            <button @click="developTodoList(todoList.id)" class="todolistClickable"> {{ todoList.name + ' (' + this.getUncompletedTodo(todoList.id) + ')'}} </button>
            <button @click="deleteList(todoList.id)">X</button>
            </li>
        </ul>
        <b v-else>Vous n'avez aucune liste pour le moment !</b><br>
    </div>
</template>



<script>
import { mapActions, mapGetters } from "vuex";
import router from '../router';
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
        logOut: function() {
            localStorage.removeItem('token');
            localStorage.setItem('isLogged', false);
            router.push('/login');
        },
        ...mapActions("todolist", ["load", "createList", "deleteList", "loadTodos"]),
        ...mapActions('account', ['getUser']),
    },
    computed: {
        ...mapGetters("todolist", ["lists", "getUncompletedTodo", "getAllUncompleted"]),
        ...mapGetters('account', ['userToken', 'getUserName'])
    },
    created() {
        this.load();
        this.getUser();
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
