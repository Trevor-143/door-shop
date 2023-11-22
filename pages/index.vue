<template>
    <div>
        <div class="featuredProduct">
            <div class="fInfo">
                <h2>{{ featuredProduct.title }}</h2>
                <h4>{{ featuredProduct.category }}</h4>
                <p>{{ featuredProduct.description }}</p>
                <h5>$ {{ featuredProduct.price }}</h5>

            </div>
            <img :src="featuredProduct.image" alt="featured product">
        </div>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/getAllProducts')
const featuredProduct = data.value.randomProduct
console.log(data.value)


</script>

<style scoped>

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

</style>