<template>
    <div class="form">
        <h2>Inscription</h2>
        <label> Nom : <input type="text" placeholder="Nouvel identifiant" name="name" v-model="name"></label>
        <br>
        <label> Email : <input type="email" placeholder="Adresse mail" name="email" v-model="email"></label>
        <br>
        <label> Mot de passe : <input type="password" placeholder="Mot de passe" name="password" v-model="password"></label>
        <br>
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
