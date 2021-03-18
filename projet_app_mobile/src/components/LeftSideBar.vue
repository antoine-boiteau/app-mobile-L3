<template>
    <div class="sideBar">
        <h1>Ma sideBar :</h1>
        <ul>
            <li v-for="todoList in lists" v-bind:key = "todoList.id">           
            {{ todoList.name }} 
            <button @click="developTodoList(todoList.id)"> developper la todolist </button>
            <button @click="deleteList(todoList.id)">Supprimer la todolist</button>
            </li>
        </ul>

        <input type="text" name="newListName" v-model="newListName">
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