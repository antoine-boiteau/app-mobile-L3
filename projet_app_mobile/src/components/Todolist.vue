<template>
    <div class="todolist">

        <h2> {{ getName }} </h2>

        <input type="text" placeholder="Nouvelle tâche" name="newTodoName" v-model="newTodoName">
        <button @click="createTodo({newTodoName, selectedTodoList})">Créer une tâche</button>
        <div class="filters">
          Filtrer :
          <button @click="showEveryTodos">Voir tout</button>
          <button @click="showCompleteds">Complétées</button>
          <button @click="showNotCompleteds">À faire</button>
        </div>

        <ul v-if="existTodo">
            <li v-for="todo in filteredTodos" :key = "todo.id" class="todo">
            <label class="todoText">
              <input type="checkbox" checked v-if="todo.completed" @change="updateTodo(todo.name, todo.todolist_id, todo.completed, todo.id)">
              <input type="checkbox" v-else @change="updateTodo(todo.name, todo.todolist_id, todo.completed, todo.id)">
              {{ todo.name }}
            </label>
            <button @click="deleteTodo(todo.id)"> X </button>
            </li>
        </ul>
        <p v-else-if="existList(this.selectedTodoList)"><b>Aucune todo dans cette liste</b></p>
        <p v-else><b>Aucune liste sélectionnée</b></p>
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
        ...mapActions('todolist', ["loadTodos", "createTodo", "deleteTodo", "completeTodo"]),
        updateTodo: function(name, todolist_id, completed, id) {
            this.completeTodo({name, todolist_id, completed, id});
        },
    },
    computed: {
        ...mapGetters('todolist', ["existList", "getListName","existTodo", "getTodosLength" ,"getEveryTodo", "getCompletedOnly", "getUncompletedOnly"]),
        filteredTodos: function (){
            if (this.filter == 'uncompleted'){
                return this.getUncompletedOnly;
            }
            else if (this.filter == 'completed'){
                return this.getCompletedOnly;
            }
            return this.getEveryTodo;
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
      border : 2px solid #f5efd1;
  }
  .todolist > * {
    max-width: 90%;
  }
  .todo {
  margin : 0px 5px 0px 5px;
  padding : 5px;
  }
  .todo + .todo {
    border-top : solid 1px #444455;
  }
  .filters {
    margin: 10px 0px 0px 0px;
  }
  .todoText {
    display: inline-block;
    font-size : 22px ;
    width: 90%;
  }
</style>