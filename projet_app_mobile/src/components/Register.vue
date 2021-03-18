<template>
    <div>
        <h2>Inscription</h2>
        Name :
        <input type="text" name="name" v-model="name"><br>
        Email :
        <input type="email" name="email" v-model="email"><br>
        Password :
        <input type="password" name="password" v-model="password"><br>
        <button @click="register({name,email,password})">S'inscrire</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions("account", ["register"]),
        //premier argument de mapActions = nom du store ici : account
    },
    computed: {
        ...mapGetters('account', ['getUser']),
        user() {
            return this.getUser();
        },
        
    }
}
</script>
