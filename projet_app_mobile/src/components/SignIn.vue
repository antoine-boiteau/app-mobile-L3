<template>
    <div class="form">
        <h2>Connexion</h2>
        <label>Email : <input type="email" placeholder="Adresse mail" name="email" v-model="email"></label><br>
        <label>Mot de passe : <input type="password" placeholder="Mot de passe" name="password" v-model="password"></label><br>
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
