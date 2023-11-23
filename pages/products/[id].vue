<template>
    <div>
        <h1>{{ id }} products</h1>
        <div class="productList">
            <div class="eachProduct" v-for="item in catData" :key="item.id">
                <div>
                    <img :src="item.image" :alt="item.title">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.price }}</p>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const { id } = useRoute().params

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

const { data } = await useFetch('/api/getSingleCategory', {
    method: 'post',
    body: {
        catID: id
    }
})
const catData = ref([])
console.log(data.value.catData)
catData.value = data.value.catData

</script>

<style scoped>

.productList {
    display: grid;
    align-items: center;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
}
.eachProduct {
    background-color: #f3f3f3;
    border: 3px solid #f3f3f3;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: var(--radius);
}
.eachProduct img {
    width: 100%;
    max-height: 250px;
    min-height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
}
.eachProduct h1 {
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1rem;
}
.eachProduct div {
    margin: 0.5rem;
}
.eachProduct button {
    margin: 0.5rem;
    width: fit-content;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--radius);
    background-color: var(--themeColor);
    font-weight: 600;
    color: #fff;
}
</style>