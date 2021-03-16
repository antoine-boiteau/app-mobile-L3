<template>
    <Register></Register>
    <SignIn></SignIn>
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
