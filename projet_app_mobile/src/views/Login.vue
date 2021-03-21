<template>
    <div class="forms">
        <Register></Register>
        <SignIn></SignIn>
    </div>
</template>

<script>

import Register from '../components/Register.vue';
import SignIn from '../components/SignIn.vue';

export default {
    name: 'Login',
    components: {
        Register,
        SignIn
    }
}
</script>

<style>
  .forms {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .forms > * {
      margin : 2vw;
      padding : 1vw 2vw;
      background-color : #fffae1 ;
      border : 2px solid #f5efd1;
  }

</style>