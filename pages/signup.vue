<template>
    <div class="logForm" >
        <h1>sign up for door</h1>
        <form @submit.prevent="signUp" >
            <input type="email" placeholder="Your email" v-model="uEmail" >
            <input type="password" placeholder="your password" v-model="uPassword" >
            <button type="button" @click="signUp" >Sign up</button>
        </form>
        <div class="notify" v-if="hint" :class="uEmail && uPassword ? 'green':''" >
            <span>{{ mess }}</span>
        </div>
    </div>
</template>

<script setup>
import { Auth } from "../firebaseSetup/config"
import { createUserWithEmailAndPassword } from "firebase/auth"

const uEmail = ref('')
const uPassword = ref('')

const hint = ref(false)
const mess = ref('')
const router = useRouter()

const signUp = async () => {
    if(!uEmail.value) {
        mess.value = 'email is required'
        hint.value = true
        setTimeout(() => {
            hint.value = false
            mess.value = ''
        }, 3000);
        return
    }
    if(!uPassword.value) {
        mess.value = 'password is required'
        hint.value = true
        setTimeout(() => {
            hint.value = false
            mess.value = ''
        }, 3000);
        return
    }
    try {
        await createUserWithEmailAndPassword(Auth, uEmail.value, uPassword.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            mess.value = 'welcome'
            hint.value = true
            setTimeout(() => {
                hint.value = false
                mess.value = ''
            }, 3000);
            router.push('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    } catch (error) {
        console.log(error)
    }
}

</script>

<style>

.logForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
}
.logForm form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
}
.logForm form input {
    padding: 1rem;
    border: none;
    outline: none;
    background-color: #eee;
    margin-top: 1rem;
    border-radius: 1rem;
    /* max-width: 500px; */
    width: 100%;
}
.logForm form button {
    margin-top: 2rem;
    background-color: var(--themeColor);
    color: #fff;
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    width: fit-content;
    cursor: pointer;
}
.notify {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 1rem auto;
    background-color: red;
    color: #fff;
    width: fit-content;
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 700;
}
.green {
    background-color: green;
}

</style>