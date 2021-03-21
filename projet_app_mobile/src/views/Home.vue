<template>
  <div class="components">
    <LeftSideBar @updateDisplayedTodoList="changeDisplayedTodoList" ></LeftSideBar>
    <Todolist :selectedTodoList="selectedTodoList"></Todolist>
  </div>
</template>

<script>

import Todolist from '../components/Todolist.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import router from '../router'

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
  },
  created() {
    if(!JSON.parse(localStorage.isLogged)) {
      router.push('/login');
    }
  }
}
</script>


<style>
  .components {

    display : grid;
    grid-template-columns: 3fr 8fr 1fr;
  }

</style>