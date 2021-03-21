<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>


<style>

  body {
  margin : 20px;
  background-color :  #fff9d1 ;
  font-family : Garamond ;
  font-size : 20px;
  }



  button {
    background-color: #fcfcff;
    border : solid 2px #ececee;
    border-radius: 5px;
    padding : 5px;
    margin: 2px;
  }

  button:hover {
    background-color: #dededd;
    border : solid 2px #cbcbcb;
  }

</style>
