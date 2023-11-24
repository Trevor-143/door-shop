<template>
    <div class="mainHeader">
        <div class="headerContent" >
            <div @click="goHome" class="logo" style="cursor: pointer;" >
                <img src="/door-lock-icon.png" alt="logo" >
                <span>Shop</span>
            </div>
            <div class="bigNav" >
                <nuxt-link v-for="(cat, index) in category" :key="index" :to="`/products/${cat}`" >{{ cat }}</nuxt-link>
                <div class="userActions">
                    <div v-if="!isUser" class="userOut">
                        <nuxt-link to="/signup" >sign up</nuxt-link>
                        <nuxt-link to="/signin" >log in</nuxt-link>
                    </div>
                    <div v-if="isUser" class="userIn">
                        <img v-if="userImage" :src=userImage alt="no user image" />
                        <img v-else src="/shopper-icon.png" alt="no user image" />
                        <h4>User Name</h4>
                        <div class="loggedUserActions">
                            <nuxt-link to="#" >Cart</nuxt-link>
                            <button>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const isUser = ref(false)

const userImage = useCookie('userImage', { sameSite: 'lax' })
const userName = useCookie('userName', { sameSite: 'lax' })
const userId = useCookie('userId', { sameSite: 'lax' })

const category = ref([])

const { data } = await useFetch('/api/getCategories')
category.value = data.value.allCategories
console.log(category.value)

const router = useRouter()
const goHome = () => {
    router.push('/')
}

</script>

<style scoped>

.headerContent {
    display: flex;
    /* background-color: red; */
    justify-content: space-between;
}
.logo {
    /* background-color: red; */
    position: relative;
    padding: 1rem;
}
.logo img {
    width: 50px;
}
.logo span {
    font-size: 2rem;
    font-weight: 800;
    position: absolute;
    bottom: 1rem;
    right: -2.5rem;
    color: var(--themeColor);
}

.bigNav {
    display: flex;
    align-items: center;
}
.bigNav a {
    text-decoration: none;
    color: #000000;
    margin-left: 1rem;
}
.bigNav a:last-child {
    padding: 0.5rem 1rem;
    background-color: var(--themeColor);
    color: #ffffff;
    font-weight: 800;
    border-radius: var(--radius);
}

</style>