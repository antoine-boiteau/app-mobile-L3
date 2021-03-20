<template>
    <div class="todolist">

        <h2> {{ getName }} </h2>
        <ul v-if="existTodo(this.selectedTodoList)">
            <li v-for="todo in filteredTodos" :key = "todo.id" class="todo">
            <input type="checkbox" checked v-if="todo.completed" @change="updateTodo(todo.name, todo.todolist_id, todo.completed, todo.id)">
            <input type="checkbox" v-else @change="updateTodo(todo.name, todo.todolist_id, todo.completed, todo.id)">
            {{ todo.name }}
            <button @click="deleteTodo(todo.id)"> supprimer la todo </button>
            </li>
        </ul>
        <p v-else-if="existList(this.selectedTodoList)"><b>Aucune todo dans cette liste</b></p>
        <p v-else><b>Aucune liste sélectionnée</b></p>
        <input type="text" placeholder="Nouvelle tâche" name="newTodoName" v-model="newTodoName">
        <button @click="createTodo({newTodoName,selectedTodoList})">Créer la tâche</button>
        <div class="filters">
          Filtrer :
          <button @click="showEveryTodos">Voir tout</button>
          <button @click="showCompleteds">Complétées</button>
          <button @click="showNotCompleteds">À faire</button>
        </div>
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
        ...mapGetters('todolist', ["existList", "getListName","existTodo", "getEverytodo", "getCompletedOnly", "getUncompletedOnly"]),
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

<style>
  .todolist {
      background-color : #fffae1 ;

      padding: 10px 2vw 10px 2vw;
  }

  .todolist > * {
    max-width: 90%;
  }

  .todo {
  border-bottom : solid 1px #444455;
  margin : 0px 5px 0px 5px;
  padding : 5px;
  }

  .filters {
    margin: 10px 0px 0px 0px;
  }

</style>
