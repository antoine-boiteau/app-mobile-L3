<template>
  <LeftSideBar @updateDisplayedTodoList="changeDisplayedTodoList" ></LeftSideBar>
  <Todolist :selectedTodoList="selectedTodoList"></Todolist>
</template>

<script>

import Todolist from '../components/Todolist.vue'
import LeftSideBar from '../components/LeftSideBar.vue'

export default {
  name: 'Home',
  components: {
    Todolist,
    LeftSideBar
  },
  data(){
    return{
      selectedTodoList: 1
    }
  },
  methods: {
    changeDisplayedTodoList: function(id){
      this.selectedTodoList = id;
    },
  }
}
</script>