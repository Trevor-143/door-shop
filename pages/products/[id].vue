<template>
    <div>
        <h1>product - {{ id }}</h1>
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
console.log(data.value)

</script>

<style scoped>

</style>