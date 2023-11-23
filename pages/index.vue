<template>
    <div class="myShop" >
        <div class="featuredProduct">
            <div class="fInfo">
                <h2>{{ featuredProduct.title }}</h2>
                <h4>{{ featuredProduct.category }}</h4>
                <p>{{ featuredProduct.description }}</p>
                <h5>$ {{ featuredProduct.price }}</h5>
            </div>
            <img :src="featuredProduct.image" alt="featured product">
        </div>
        <div class="womensClothes">
            <h2>Women's clothing</h2>
            <div class="list">
                <div class="each" v-for="p in womens_clothing" :key="p.id">
                    <img :src="p.image" :alt="p.title">
                    <nuxt-link to="#">{{ p.title }}</nuxt-link>
                </div>
            </div>
        </div>
        <div class="MensClothes">
            <h2>Men's clothing</h2>
            <div class="list">
                <div class="each" v-for="p in mens_clothing" :key="p.id">
                    <img :src="p.image" :alt="p.title">
                    <nuxt-link to="#">{{ p.title }}</nuxt-link>
                </div>
            </div>
        </div>
        <div class="electronics">
            <h2>Electronics</h2>
            <div class="list">
                <div class="each" v-for="p in electronics" :key="p.id">
                    <div class="showImg">
                        <img :src="p.image" :alt="p.title">
                    </div>
                    <nuxt-link to="#">{{ p.title }}</nuxt-link>
                </div>
            </div>
        </div>
        <div class="jewelery">
            <h2>Jewelery</h2>
            <div class="list">
                <div class="each" v-for="p in jeweleryColl" :key="p.id">
                    <img :src="p.image" :alt="p.title">
                    <nuxt-link to="#">{{ p.title }}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/getAllProducts')
const featuredProduct = data.value.randomProduct
const jeweleryColl = data.value.jeweleryColl
const electronics = data.value.electronics
const mens_clothing = data.value.mens_clothing
const womens_clothing = data.value.womens_clothing

// console.log(data.value)


</script>

<style scoped>
.myShop *::-webkit-scrollbar {
    display: none;
}
.featuredProduct {
    display: grid;
    gap: 2rem;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    border-radius: 2rem;
    border: 3px solid var(--softTheme);
    overflow: hidden;
}
.fInfo {
    background-color: var(--softTheme);
    padding: 10%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.fInfo h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
}
.fInfo h4 {
    background-color: var(--themeColor);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    width: fit-content;
    color: #fff;
    margin-bottom: 0.5rem;
}
.fInfo h5 {
    font-weight: 800;
}
.featuredProduct img {
    max-width: 300px;
    /* margin: auto; */
    background: none;
    border-radius: 1rem;
    margin: 10% auto;
}
.womensClothes, .MensClothes, .electronics, .jewelery {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
}
.womensClothes h2, .MensClothes h2, .electronics h2, .jewelery h2 {
    margin-top: 0.5rem;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
}
.womensClothes .list,
.MensClothes .list,
.electronics .list, 
.jewelery .list {
    overflow-x: auto;
}
.womensClothes .list::-webkit-scrollbar,
.MensClothes .list::-webkit-scrollbar,
.electronics .list::-webkit-scrollbar, 
.jewelery .list::-webkit-scrollbar {
    display: none;
}
.womensClothes .list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.womensClothes .list .each {
    min-width: 16rem;
    margin-right: 1rem;
    background-color: #f3f3f3;
    padding: 0.5rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
}
.womensClothes .list .each img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 2rem;
}
.womensClothes .list .each a {
    color: #000;
    text-decoration: none;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 800;
}
.MensClothes .list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.MensClothes .list .each {
    min-width: 20rem;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    margin-right: 1rem;
    padding: 0.5rem;
    border-radius: 1rem;
}
.MensClothes .list .each img {
    width: 45%;
    height: 100px;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 1rem;
}
.MensClothes .list .each a {
    text-decoration: none;
    color: #000;
    font-weight: 800;
}

.electronics .list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.electronics .list .each {
    min-width: 16rem;
    margin-right: 1rem;
    background-color: #f3f3f3;
    padding: 0.5rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
    height: fit-content;
}
.showImg {
    background-color: var(--softTheme);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    margin-bottom: 1rem;
}
.electronics .list .each img {
    width: 100px;
    height: 100px;
    margin: auto;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 2rem;
}
.electronics .list .each a {
    color: #000;
    text-decoration: none;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 800;
}
.jewelery .list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 2rem;
}
.jewelery .list .each {
    min-width: 17rem;
    position: relative;
    margin-right: 1rem;
}
.jewelery .list .each img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem;
    overflow: hidden;
}
.jewelery .list .each a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, var(--softTheme), rgba(0, 0, 0, 0) );
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    text-decoration: none;
    font-weight: 700;
    border-radius: 1rem;
}

</style>