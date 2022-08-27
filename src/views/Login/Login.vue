<template>
    <div class="container">
        <div class="modal">
            <h2>Portal Admin</h2>
            <input type="text" name="login" id="login" v-model="login">
            <input type="password" name="pwd" id="pwd" v-model="pwd">
            <div>&nbsp;</div>
            <button id="logInBtn" class="dark" type="submit" @click="didTapLogin($event)">Entrar</button>
            <button id="forgotBtn" class="dark__outlined" type="submit" @click="didTapForgot($event)">Esqueceu sua senha?</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

//import AppBoxView from '@/components/AppBoxView.vue'

import router from "../../router/index"
import LoginManager from "@/managers/LoginManager";

export default defineComponent({
    data() {
        return {
            login: "",
            pwd: ""
        }
    },
    methods: {
        didTapLogin(e: Event) {
            e.preventDefault()
            $('#logInBtn').addClass("loading")
            LoginManager.singleton.doLogin(this.login, this.pwd, () => {
               router.replace("/")
            })
        }
    },
    mounted() {
        this.login = localStorage.getItem("login") ?? ""
        this.pwd = localStorage.getItem("pwd") ?? ""
    },
    components: {
        //AppBoxView
    }
})
</script>

<style scoped lang="scss">

.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    //grid-template-areas: ". modal";

    //grid-template-columns: 60% 40%;

    & > .modal {
        //grid-area: modal;
        color: #2A3F54;
        background-color: whitesmoke;

        padding: 15px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        row-gap: 15px;

        text-align: center;
        
        & > input {
            width: 80%;
        }

        & > button {
            min-width: 50%;
        }

    }
    
}

</style>