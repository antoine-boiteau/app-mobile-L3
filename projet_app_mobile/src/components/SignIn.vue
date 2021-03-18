<template>
    <div>
        <h2>Connexion</h2>
        Email :
        <input type="email" name="email" v-model="email"><br>
        Password :
        <input type="password" name="password" v-model="password"><br>
        <button @click="login({email,password})">Se connecter</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions("account", ["login"]),
    },
    computed: {
        ...mapGetters('account', ["getUser"]),
        user() {
            return this.getUser();
        }
    }
}
</script>
