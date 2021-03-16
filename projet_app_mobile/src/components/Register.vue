<template>
    <div>
        <h2>Inscription</h2>
        <input type="text" id="signUpName"><br>
        <input type="text" id="signUpEmail"><br>
        <input type="text" id="signUpPassword"><br>
        <button @click="user">S'inscrire</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'Register',
    methods: {
        ...mapActions("register", ["register"]),
    },
    created() {
        this.register(document.getElementById("signUpName"), document.getElementById("signUpEmail"), document.getElementById("signUpPassword"));
    },
    computed: {
        ...mapGetters('user', ['getUser']),
        user() {
            return this.getUser();
        }
    }
}
</script>
