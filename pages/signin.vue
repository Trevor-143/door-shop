<template>
    <div class="logForm" >
        <h1>login to door</h1>
        <form @submit.prevent="signUp" >
            <input type="email" placeholder="Your email" v-model="uEmail" >
            <input type="password" placeholder="your password" v-model="uPassword" >
            <button type="button" @click="signUp" >Log in</button>
        </form>
        <div class="notify" v-if="hint" :class="uEmail && uPassword ? 'green':''" >
            <span>{{ mess }}</span>
        </div>
    </div>
</template>

<script setup>
import { Auth } from "../firebaseSetup/config"
import { signInWithEmailAndPassword } from "firebase/auth"

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
        await signInWithEmailAndPassword(Auth, uEmail.value, uPassword.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            mess.value = 'welcome back'
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