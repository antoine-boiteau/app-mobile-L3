<template>
    <div class="sideBar">
        <h1>Mes listes :</h1>
        <ul v-if="lists.length > 0">
            <li v-for="todoList in lists" v-bind:key = "todoList.id">
            {{ todoList.name }}
            <button @click="developTodoList(todoList.id)"> développer la todolist </button>
            <button @click="deleteList(todoList.id)">Supprimer la todolist</button>
            </li>
        </ul>
        <b v-else>Vous n'avez aucune liste pour le moment !</b><br>

        <input type="text" placeholder="Nouvelle todolist" name="newListName" v-model="newListName">
        <button @click="createList({newListName})">Créer la todolist</button>
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
            this.$emit('updateDisplayedTodoList',id); //on prévient le parent qui est Home.vue qu'on demande l'affichage d'une todo, on précise son id
        },
        ...mapActions("todolist", ["load", "createList", "deleteList"]),
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
