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
}
.eachProduct img {
    width: 100%;
    max-height: 250px;
    min-height: 250px;
    object-fit: cover;
}
.eachProduct h1 {
    display: -webkit-box;
    overflow: hidden;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1rem;
}

</style>