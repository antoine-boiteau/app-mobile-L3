<template>
  <LeftSideBar @updateDisplayedTodoList="changeDisplayedTodoList" ></LeftSideBar>
  <Todolist :selectedTodoList="selectedTodoList"></Todolist>
</template>

<script>
import { mapActions } from "vuex";

import Todolist from './components/Todolist.vue'
import LeftSideBar from './components/LeftSideBar.vue'

export default {
  name: 'App',
  data(){
    return{
      selectedTodoList: 1
    }
  },
  components: {
    Todolist,
    LeftSideBar
  },
  methods: {
    changeDisplayedTodoList: function(id){
      this.selectedTodoList = id;
    },
    ...mapActions("todolist", ['load'])
  },


}
</script>

